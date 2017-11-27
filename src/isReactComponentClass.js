import * as types from '@babel/types';

function isRenderMethod(node) {
  return types.isClassMethod(node) &&
    !node.computed &&
    !node.static &&
    (node.kind === '' || node.kind === 'method') &&
    node.key.name === 'render';
}

export default function isReactComponentClass(path) {
  var node = path.node;
  if (!types.isClassDeclaration(node) &&
    !types.isClassExpression(node)) {
    return false;
  }

  // render method
  if (node.body.body.some(isRenderMethod)) {
    return true;
  }

  // extends ReactComponent?
  if (!node.superClass) {
    return false;
  }
  var superClass = path.get('superClass');
  if (
    (types.isMemberExpression(superClass.node) && superClass.get('property').node.name != 'Component')
      || superClass.node.name != 'Component'
  ) {
    return false;
  }
  return true;
}
