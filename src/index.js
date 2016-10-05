import {find, functionsIn} from 'lodash';
import * as reactDocs from 'react-docgen';

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
      // Class(path){
      //   if(
      //     isReactLikeClass(path.node)
      //       && !(
      //         path.get('body').get('body')[0].get('body').get('body')[0].get('expression').node
      //           && path.get('body').get('body')[0].get('body').get('body')[0].get('expression').get('left').get('property').get('name').node == '__docgenInfo'
      //       )) {

      //         const render = find(path.get('body').get('body'), (path) => path.node.key.name == "render");
      //         const docvar = t.expressionStatement(t.assignmentExpression(
      //           "=",
      //           t.memberExpression(
      //             t.identifier("this"),
      //             t.identifier("__docgenInfo")
      //           ),
      //           //t.identifier("__docgen"),
      //           t.stringLiteral(JSON.stringify(reactDocs.parse(this.file.code)))
      //         ));
      //         path.get('body').get('body')[0].get('body').get('body')[0].insertBefore(docvar);
      //       }
      // }
      Class(path) {
        try {
        if(isReactLikeClass(path.node)
           && !find(path.get('body').get('body'), classMember => classMember.node.key.name == '__docgenInfo')) {
          const returnStatement = t.returnStatement(t.stringLiteral(JSON.stringify(reactDocs.parse(this.file.code))));
          const docgenInfo = t.classMethod("method", t.identifier("__docgenInfo"), [], t.blockStatement([returnStatement]));

          path.get('body').get('body')[0].insertBefore(docgenInfo);

        }
      }catch(e) {
        console.log(e);
      }
      }
    }
  };
}
