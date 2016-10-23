// This is taken from the oliviertassinari/babel-plugin-transform-react-remove-prop-types
// See: https://git.io/vPHoh

function isJSXElementOrReactCreateElement(node) {
  const {
    type,
    callee,
  } = node;

  if (type === 'JSXElement') {
    return true;
  }

  if (callee && callee.object && callee.object.name === 'React' &&
    callee.property.name === 'createElement') {
    return true;
  }

  return false;
}

function isReturningJSXElement(path) {
  /**
   * Early exit for ArrowFunctionExpressions, there is no ReturnStatement node.
   */
  if (path.node.init && path.node.init.body && isJSXElementOrReactCreateElement(path.node.init.body)) {
    return true;
  }

  let visited = false;

  /**
    Looking for functions returning a JSX.
  */
  path.traverse({
    ReturnStatement(path2) {
      // We have already found what we are looking for.
      if (visited) {
        return;
      }

      const argument = path2.get('argument');

      // Nothing is returned
      if (!argument.node) {
        return;
      }

      if (isJSXElementOrReactCreateElement(argument.node)) {
        visited = true;
        return;
      }

      if (argument.node.type === 'CallExpression') {
        const name = argument.get('callee').node.name;
        const binding = path.scope.getBinding(name);

        // Here we do not check for any function calles except `_possibleConstructorReturn`.
        // That's because we only need to check if the function returning JSX elements right away.
        // We don't need to check any other function calls which generate JSX.
        // TODO: between babel versions `_possibleConstructorReturn` name could get changed.
        // So, we need to look at it a bit.
        if (!binding || name != '_possibleConstructorReturn') {
          return;
        }

        if (isReturningJSXElement(binding.path)) {
          visited = true;
        }
      }
    },
  });

  return visited;
}

const validPossibleStatelessComponentTypes = [
  'Property',
  'VariableDeclarator',
  'FunctionDeclaration',
  'ArrowFunctionExpression',
];

/**
 * Returns `true` if the path represents a function which returns a JSXElement
 */
export default function isStatelessComponent(path) {
  const node = path.node;

  if (validPossibleStatelessComponentTypes.indexOf(node.type) === -1) {
    return false;
  }

  if(path.get('body').get('type').node == 'JSXElement') {
    return true;
  }
  if (isReturningJSXElement(path)) {
    return true;
  }

  return false;
}
