// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should flowTypeNotWorking 1`] = `
"\\"use strict\\";

function _typeof(obj) { if (typeof Symbol === \\"function\\" && typeof Symbol.iterator === \\"symbol\\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \\"function\\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \\"symbol\\" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, \\"__esModule\\", {
  value: true
});
exports.StyledButton = void 0;

var React = _interopRequireWildcard(require(\\"react\\"));

var _styledComponents = _interopRequireDefault(require(\\"styled-components\\"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== \\"function\\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \\"object\\" && typeof obj !== \\"function\\") { return { \\"default\\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\\"default\\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral([\\"\\\\n  margin: \\", \\";\\\\n  height: 40px;\\\\n  max-width: 254px;\\\\n  text-transform: uppercase;\\\\n  text-decoration: none;\\\\n  text-align: center;\\\\n  cursor: pointer;\\\\n  border-radius: 2px;\\\\n  background-color: \\", \\";\\\\n\\\\n  &:hover {\\\\n    background: \\", \\";\\\\n  }\\\\n\\"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents[\\"default\\"].button(_templateObject(), function (props) {
  return props.margin ? props.margin : '10px';
}, function (props) {
  return props.bgColor ? props.bgColor : 'rgb(255, 168, 39)';
}, function (props) {
  return props.hoverColor ? props.hoverColor : '#81A2CA';
});

exports.StyledButton = StyledButton;"
`;
