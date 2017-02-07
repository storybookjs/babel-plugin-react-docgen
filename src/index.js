import * as _ from 'lodash';
import * as reactDocs from 'react-docgen';
import isReactComponentClass from './isReactComponentClass';
import isStatelessComponent from './isStatelessComponent';
import * as p from 'path';

export default function ({types: t}) {
  return {
    visitor: {
      Class(path, state) {
        if(!isReactComponentClass(path)) {
          return;
        }
        if(!path.node.id){
          return;
        }
        const className = path.node.id.name;
        const {exported = true} = state.opts;

        if(exported && !isExported(path, className, t)){
          return;
        }
        injectReactDocgenInfo(className, path, state, this.file.code, t);
      },
      'FunctionDeclaration|FunctionExpression|ArrowFunctionExpression'(path, state) {
        if(!isStatelessComponent(path)) {
          return;
        }
        if(!path.parentPath.node.id) {
          return;
        }
        const className = path.parentPath.node.id.name;
        const {exported = true} = state.opts;

        if(exported && !isExported(path, className, t)) {
          return;
        }
        injectReactDocgenInfo(className, path, state, this.file.code, t);
      },
    }
  };
}

function isExported(path, className, t){
  const types = [
    'ExportDefaultDeclaration',
    'ExportNamedDeclaration'
  ];

  if(path.parentPath.node &&
     types.some(type => {return path.parentPath.node.type === type;})) {
    return true;
  }

  const program = path.scope.getProgramParent().path;
  return program.get('body').some(path => {
    if(path.node.type === 'ExportNamedDeclaration' &&
       path.node.specifiers &&
       path.node.specifiers.length) {
      return className === path.node.specifiers[0].exported.name;
    } else if(path.node.type === 'ExportDefaultDeclaration') {
      return className === path.node.declaration.name;
    }
    return false;
  });
}

function alreadyVisited(program, t) {
  return program.node.body.some(node => {
    if(t.isExpressionStatement(node) &&
       t.isAssignmentExpression(node.expression) &&
       t.isMemberExpression(node.expression.left)
      ) {
      return node.expression.left.property.name === '__docgenInfo';
    }
    return false;
  });
}


function injectReactDocgenInfo(className, path, state, code, t) {
  const program = path.scope.getProgramParent().path;

  if(alreadyVisited(program, t)) {
    return;
  }

  let docObj = {};
  try {
    docObj = reactDocs.parse(code);
    // We don't need anything about methods.
    // Usually we don't use methods in react classes as a public API.
    // Even if we do so, that's an anti-pattern.
    // TODO:
    //  Anyway, some may need this,
    //  so we should provide an option to stop deleting methods.
    delete docObj.methods;
  } catch(e) {
    return;
  }

  const docNode = buildObjectExpression(docObj, t);
  const docgenInfo = t.expressionStatement(
    t.assignmentExpression(
      "=",
      t.memberExpression(t.identifier(className), t.identifier('__docgenInfo')),
      docNode
    ));
  program.pushContainer('body', docgenInfo);
  injectDocgenGlobal(className, path, state, t);
}

function injectDocgenGlobal(className, path, state, t) {
  const program = path.scope.getProgramParent().path;

  if(!state.opts.DOC_GEN_COLLECTION_NAME) {
    return;
  }

  const globalName = state.opts.DOC_GEN_COLLECTION_NAME;
  const filePath = p.relative('./', p.resolve('./', path.hub.file.opts.filename));
  const globalNode = t.ifStatement(
    t.binaryExpression(
      '!==',
      t.unaryExpression(
        'typeof',
        t.identifier(globalName)
      ),
      t.stringLiteral('undefined')
    ),
    t.blockStatement([
      t.expressionStatement(
        t.assignmentExpression(
          '=',
          t.memberExpression(
            t.identifier(globalName),
            t.stringLiteral(filePath),
            true
          ),
          t.objectExpression([
            t.objectProperty(
              t.identifier('name'),
              t.stringLiteral(className)
            ),
            t.objectProperty(
              t.identifier('docgenInfo'),
              t.memberExpression(
                t.identifier(className),
                t.identifier('__docgenInfo')
              )
            ),
            t.objectProperty(
              t.identifier('path'),
              t.stringLiteral(filePath)
            )
          ])
        )
      )
    ])
  );
  program.pushContainer('body', globalNode);
}

function buildObjectExpression(obj, t){
  if(_.isPlainObject(obj)) {
    const children = [];
    for (let key in obj) {
      if(!obj.hasOwnProperty(key) || _.isUndefined(obj[key])) continue;
      children.push(
        t.objectProperty(
          t.stringLiteral(key),
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
    obj.forEach(function (val) {
      children.push(buildObjectExpression(val, t));
    });
    return t.ArrayExpression(children);
  } else if(_.isNull(obj)) {
    return t.nullLiteral();
  }
}
