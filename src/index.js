import * as _ from 'lodash';
import * as reactDocs from 'react-docgen';

export default function({types: t}) {
  function isReactLikeClass(node) {
    return !!_.find(node.body.body, classMember => {
      return (
        t.isClassMethod(classMember) &&
          t.isIdentifier(classMember.key, { name: 'render' })
      );
    });
  }

  return {
    visitor: {
      Class(path) {
        const {
          node,
          scope,
        } = path;

        if(isReactLikeClass(node)){
          injectReactDocgenInfo(path, this.file.code, t);
        }
      }
    }
  };
}


function injectReactDocgenInfo(path, code, t) {
  if(!t.isProgram(path.parentPath.node)) {
    return;
  }
  const docObj = reactDocs.parse(code);
  const docgenInfo = t.expressionStatement(
    t.assignmentExpression(
      "=",
      t.memberExpression(t.identifier(path.node.id.name), t.identifier('__docgenInfo')),
      buildObjectExpression(docObj, t)
    ));
  path.parentPath.pushContainer("body", docgenInfo);
}

function buildObjectExpression(obj, t){
  if(_.isPlainObject(obj)) {
    const children = [];
    for (let key in obj) {
      if(!obj.hasOwnProperty(key) || _.isUndefined(obj[key])) continue;
      children.push(
        t.objectProperty(
          t.identifier(key),
          buildObjectExpression(obj[key], t)
        ));
    }
    return t.objectExpression(children);
  } else if (_.isString(obj)) {
    return t.stringLiteral(obj);
  } else if (_.isBoolean(obj)) {
    return t.booleanLiteral(obj);
  } else if (_.isNumber(obj)){
    return t.numericLiteral(obj);
  } else if (_.isArray(obj)) {
    const children = [];
    obj.forEach(function(val) {
      children.push(buildObjectExpression(val, t));
    });
    return t.ArrayExpression(children);
  } else if(_.isNull(obj)) {
    return t.nullLiteral();
  }
}
