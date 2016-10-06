import {find, functionsIn} from 'lodash';
import * as reactDocs from 'react-docgen';
import fs from 'fs';

export default function({types: t}) {
  function isReactLikeClass(node) {
    return !!find(node.body.body, classMember => {
      return (
        t.isClassMethod(classMember) &&
          t.isIdentifier(classMember.key, { name: 'render' })
      );
    });
  }

  return {
    visitor: {
      Class(path) {
          if(isReactLikeClass(path.node) && t.isProgram(path.parentPath.node)) {
          const docgenInfo = t.expressionStatement(
            t.assignmentExpression(
              "=",
              t.memberExpression(t.identifier(path.node.id.name), t.identifier('__docgenInfo')),
              t.stringLiteral(JSON.stringify(reactDocs.parse(this.file.code)))
            ));
          path.parentPath.pushContainer("body", docgenInfo);
        }
      }
    }
  };
}
