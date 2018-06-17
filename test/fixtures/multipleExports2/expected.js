'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _BreadcrumbStyled = require('./style/BreadcrumbStyled');

var _BreadcrumbStyled2 = _interopRequireDefault(_BreadcrumbStyled);

var _OlStyled = require('./style/OlStyled');

var _OlStyled2 = _interopRequireDefault(_OlStyled);

var _LiStyled = require('./style/LiStyled');

var _LiStyled2 = _interopRequireDefault(_LiStyled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumb = function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
  }

  _createClass(Breadcrumb, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          primary = _props.primary,
          secondary = _props.secondary,
          info = _props.info,
          success = _props.success,
          danger = _props.danger,
          warning = _props.warning,
          rtl = _props.rtl;

      var elements = [];
      for (var i = 0; i < items.length - 1; i += 1) {
        elements.push(items[i]);
      }
      var lastElement = items[items.length - 1];
      var themeProps = {
        primary: primary, secondary: secondary, info: info, success: success, danger: danger, warning: warning, rtl: rtl
      };
      return _react2.default.createElement(
        _BreadcrumbStyled2.default,
        this.props,
        _react2.default.createElement(
          _OlStyled2.default,
          themeProps,
          elements.map(function (item, index) {
            return _react2.default.createElement(
              _LiStyled2.default,
              _extends({
                key: index
              }, themeProps),
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: item.path },
                item.name
              )
            );
          }),
          _react2.default.createElement(
            _LiStyled2.default,
            themeProps,
            lastElement.name
          )
        )
      );
    }
  }]);

  return Breadcrumb;
}(_react2.default.Component);

Breadcrumb.propTypes = {
  /** array of objects */
  items: _propTypes2.default.array.isRequired,
  /** rtl is true component show  in right side of the window, default is false (from left side). */
  rtl: _propTypes2.default.bool,
  /** Boolean indicating whether the component renders with Theme.primary color */
  primary: _propTypes2.default.bool,
  /** Boolean indicating whether the component renders with Theme.secondary color */
  secondary: _propTypes2.default.bool,
  /** Boolean indicating whether the component renders with Theme.info color */
  info: _propTypes2.default.bool,
  /** Boolean indicating whether the component renders with Theme.warning color  */
  warning: _propTypes2.default.bool,
  /** Boolean indicating whether the component renders with Theme.danger color  */
  danger: _propTypes2.default.bool,
  /** Boolean indicating whether the component renders with Theme.success color */
  success: _propTypes2.default.bool,
  /** The inline-styles for the root element. */
  style: _propTypes2.default.object,
  /** The className for the root element. */
  className: _propTypes2.default.string,
  /** The color renders with Theme.foreColor . */
  foreColor: _propTypes2.default.string
};
Breadcrumb.defaultProps = {
  rtl: false,
  primary: false,
  secondary: false,
  info: false,
  warning: false,
  danger: false,
  success: false,
  style: {},
  className: '',
  foreColor: ''
};
exports.default = Breadcrumb;
Breadcrumb.__docgenInfo = {
  'description': '',
  'methods': [],
  'displayName': 'Breadcrumb',
  'props': {
    'rtl': {
      'defaultValue': {
        'value': 'false',
        'computed': false
      },
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'rtl is true component show  in right side of the window, default is false (from left side).'
    },
    'primary': {
      'defaultValue': {
        'value': 'false',
        'computed': false
      },
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Boolean indicating whether the component renders with Theme.primary color'
    },
    'secondary': {
      'defaultValue': {
        'value': 'false',
        'computed': false
      },
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Boolean indicating whether the component renders with Theme.secondary color'
    },
    'info': {
      'defaultValue': {
        'value': 'false',
        'computed': false
      },
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Boolean indicating whether the component renders with Theme.info color'
    },
    'warning': {
      'defaultValue': {
        'value': 'false',
        'computed': false
      },
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Boolean indicating whether the component renders with Theme.warning color'
    },
    'danger': {
      'defaultValue': {
        'value': 'false',
        'computed': false
      },
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Boolean indicating whether the component renders with Theme.danger color'
    },
    'success': {
      'defaultValue': {
        'value': 'false',
        'computed': false
      },
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Boolean indicating whether the component renders with Theme.success color'
    },
    'style': {
      'defaultValue': {
        'value': '{}',
        'computed': false
      },
      'type': {
        'name': 'object'
      },
      'required': false,
      'description': 'The inline-styles for the root element.'
    },
    'className': {
      'defaultValue': {
        'value': '\'\'',
        'computed': false
      },
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'The className for the root element.'
    },
    'foreColor': {
      'defaultValue': {
        'value': '\'\'',
        'computed': false
      },
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'The color renders with Theme.foreColor .'
    },
    'items': {
      'type': {
        'name': 'array'
      },
      'required': true,
      'description': 'array of objects'
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/multipleExports2/actual.js'] = {
    name: 'Breadcrumb',
    docgenInfo: Breadcrumb.__docgenInfo,
    path: 'test/fixtures/multipleExports2/actual.js'
  };
}