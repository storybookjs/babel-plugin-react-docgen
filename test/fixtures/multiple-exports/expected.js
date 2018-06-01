'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBox2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBox = function (_React$Component) {
  _inherits(ErrorBox, _React$Component);

  function ErrorBox() {
    _classCallCheck(this, ErrorBox);

    return _possibleConstructorReturn(this, (ErrorBox.__proto__ || Object.getPrototypeOf(ErrorBox)).apply(this, arguments));
  }

  _createClass(ErrorBox, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        { className: 'error-box' },
        children
      );
    }
  }]);

  return ErrorBox;
}(_react2.default.Component);

ErrorBox.propTypes = {
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = ErrorBox;

var ErrorBox2 = function (_React$Component2) {
  _inherits(ErrorBox2, _React$Component2);

  function ErrorBox2() {
    _classCallCheck(this, ErrorBox2);

    return _possibleConstructorReturn(this, (ErrorBox2.__proto__ || Object.getPrototypeOf(ErrorBox2)).apply(this, arguments));
  }

  _createClass(ErrorBox2, [{
    key: 'render',
    value: function render() {
      var children2 = this.props.children2;


      return _react2.default.createElement(
        'div',
        { className: 'error-box' },
        children2
      );
    }
  }]);

  return ErrorBox2;
}(_react2.default.Component);

ErrorBox2.propTypes = {
  children2: _react2.default.PropTypes.node.isRequired
};

exports.ErrorBox2 = ErrorBox2;
ErrorBox.__docgenInfo = {
  'description': '',
  'methods': [],
  'displayName': 'ErrorBox',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/multiple-exports/actual.js'] = {
    name: 'ErrorBox',
    docgenInfo: ErrorBox.__docgenInfo,
    path: 'test/fixtures/multiple-exports/actual.js'
  };
}

ErrorBox2.__docgenInfo = {
  'description': '',
  'methods': [],
  'displayName': 'ErrorBox2',
  'props': {
    'children2': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/multiple-exports/actual.js'] = {
    name: 'ErrorBox2',
    docgenInfo: ErrorBox2.__docgenInfo,
    path: 'test/fixtures/multiple-exports/actual.js'
  };
}