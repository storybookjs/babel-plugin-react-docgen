'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Child = function Child() {
  return _react2.default.createElement(
    'div',
    null,
    'Sample'
  );
};

function FuncDeclaration(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    children,
    _react2.default.createElement(Child, null)
  );
}

FuncDeclaration.propTypes = {
  children: _react.PropTypes.node
};

exports.default = FuncDeclaration;
FuncDeclaration.__docgenInfo = {
  'description': '',
  'displayName': 'FuncDeclaration',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': ''
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/functionDeclaration/actual.js'] = {
    name: 'FuncDeclaration',
    docgenInfo: FuncDeclaration.__docgenInfo,
    path: 'test/fixtures/functionDeclaration/actual.js'
  };
}