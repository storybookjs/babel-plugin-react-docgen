'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style;

  return _react2.default.createElement(
    'button',
    {
      style: {},
      onClick: onClick
    },
    children
  );
};

Button.propTypes = {
  children: _react2.default.PropTypes.string.isRequired,
  onClick: _react2.default.PropTypes.func,
  style: _react2.default.PropTypes.object
};
Button.__docgenInfo = {
  'description': '',
  'methods': [],
  'props': {
    'style': {
      'defaultValue': {
        'value': '{}',
        'computed': false
      },
      'type': {
        'name': 'object'
      },
      'required': false,
      'description': ''
    },
    'children': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': ''
    },
    'onClick': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/exportedDeclaration/actual.js'] = {
    name: 'Button',
    docgenInfo: Button.__docgenInfo,
    path: 'test/fixtures/exportedDeclaration/actual.js'
  };
}