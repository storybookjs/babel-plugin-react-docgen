// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should functionDeclaration 1`] = `
"\\"use strict\\";

function _typeof(obj) { if (typeof Symbol === \\"function\\" && typeof Symbol.iterator === \\"symbol\\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \\"function\\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \\"symbol\\" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, \\"__esModule\\", {
  value: true
});
exports[\\"default\\"] = void 0;

var _react = _interopRequireWildcard(require(\\"react\\"));

function _getRequireWildcardCache() { if (typeof WeakMap !== \\"function\\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \\"object\\" && typeof obj !== \\"function\\") { return { \\"default\\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\\"default\\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Child = function Child() {
  return _react[\\"default\\"].createElement(\\"div\\", null, \\"Sample\\");
};

function FuncDeclaration(_ref) {
  var children = _ref.children;
  return _react[\\"default\\"].createElement(\\"div\\", null, children, _react[\\"default\\"].createElement(Child, null));
}

FuncDeclaration.propTypes = {
  children: _react.PropTypes.node
};
FuncDeclaration.__docgenInfo = {
  \\"description\\": \\"\\",
  \\"methods\\": [],
  \\"displayName\\": \\"FuncDeclaration\\",
  \\"props\\": {
    \\"children\\": {
      \\"type\\": {
        \\"name\\": \\"node\\"
      },
      \\"required\\": false,
      \\"description\\": \\"\\"
    }
  }
};
var _default = FuncDeclaration;
exports[\\"default\\"] = _default;

if (typeof STORYBOOK_REACT_CLASSES !== \\"undefined\\") {
  STORYBOOK_REACT_CLASSES[\\"test/fixtures/functionDeclaration/input.js\\"] = {
    name: \\"FuncDeclaration\\",
    docgenInfo: FuncDeclaration.__docgenInfo,
    path: \\"test/fixtures/functionDeclaration/input.js\\"
  };
}"
`;
