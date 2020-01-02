// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should example module exports 1`] = `
"\\"use strict\\";

function _typeof(obj) { if (typeof Symbol === \\"function\\" && typeof Symbol.iterator === \\"symbol\\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \\"function\\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \\"symbol\\" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require(\\"react\\"));

var _logo = _interopRequireDefault(require(\\"./logo.svg\\"));

require(\\"./App.css\\");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== \\"function\\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \\"object\\" && typeof obj !== \\"function\\") { return { \\"default\\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\\"default\\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function App() {
  return _react[\\"default\\"].createElement(\\"div\\", {
    className: \\"App\\"
  }, _react[\\"default\\"].createElement(\\"div\\", {
    className: \\"App-header\\"
  }, _react[\\"default\\"].createElement(\\"img\\", {
    src: _logo[\\"default\\"],
    className: \\"App-logo\\",
    alt: \\"logo\\"
  }), _react[\\"default\\"].createElement(\\"h2\\", null, \\"Welcome to React\\")), _react[\\"default\\"].createElement(\\"p\\", {
    className: \\"App-intro\\"
  }, \\"To get started, edit \\", _react[\\"default\\"].createElement(\\"code\\", null, \\"src/App.js\\"), \\" and save to reload.\\"));
}

module.exports = App;
App.__docgenInfo = {
  \\"description\\": \\"\\",
  \\"methods\\": [],
  \\"displayName\\": \\"App\\"
};

if (typeof STORYBOOK_REACT_CLASSES !== \\"undefined\\") {
  STORYBOOK_REACT_CLASSES[\\"relativePath(input.js)\\"] = {
    name: \\"App\\",
    docgenInfo: App.__docgenInfo,
    path: \\"relativePath(input.js)\\"
  };
}"
`;
