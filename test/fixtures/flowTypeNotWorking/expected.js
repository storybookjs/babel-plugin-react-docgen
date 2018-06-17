'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin: ', ';\n  height: 40px;\n  max-width: 254px;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 2px;\n  background-color: ', ';\n\n  &:hover {\n    background: ', ';\n  }\n'], ['\n  margin: ', ';\n  height: 40px;\n  max-width: 254px;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 2px;\n  background-color: ', ';\n\n  &:hover {\n    background: ', ';\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = exports.StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.margin ? props.margin : '10px';
}, function (props) {
  return props.bgColor ? props.bgColor : 'rgb(255, 168, 39)';
}, function (props) {
  return props.hoverColor ? props.hoverColor : '#81A2CA';
});