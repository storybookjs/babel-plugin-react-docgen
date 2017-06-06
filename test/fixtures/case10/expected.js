'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Button = require('./Button.scss');

var s = _interopRequireWildcard(_Button);

var _MaterialIcons = require('../icons/MaterialIcons.scss');

var icons = _interopRequireWildcard(_MaterialIcons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    type: _react.PropTypes.oneOf(['primary', 'secondary', 'flat', 'flatlight', 'minimal', 'minimallight']).isRequired,
    text: _react.PropTypes.string.isRequired,
    icon: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    danger: _react.PropTypes.bool,
    fullwidth: _react.PropTypes.bool
};

var defaultProps = {
    type: 'primary'
};

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _props = this.props,
                icon = _props.icon,
                text = _props.text,
                type = _props.type,
                disabled = _props.disabled,
                danger = _props.danger,
                fullwidth = _props.fullwidth;


            var className = (0, _classnames3.default)(s.root, s[type], (_classnames = {}, _defineProperty(_classnames, s.danger, danger), _defineProperty(_classnames, s.disabled, disabled), _defineProperty(_classnames, s.fullwidth, fullwidth), _classnames));

            return _react2.default.createElement(
                'button',
                { className: className },
                icon && _react2.default.createElement(
                    'i',
                    { className: icons.materialIcons },
                    icon
                ),
                text
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = (0, _withStyles2.default)(s, icons)(Button);
Button.__docgenInfo = {
    'description': '',
    'props': {
        'type': {
            'type': {
                'name': 'enum',
                'value': [{
                    'value': '\'primary\'',
                    'computed': false
                }, {
                    'value': '\'secondary\'',
                    'computed': false
                }, {
                    'value': '\'flat\'',
                    'computed': false
                }, {
                    'value': '\'flatlight\'',
                    'computed': false
                }, {
                    'value': '\'minimal\'',
                    'computed': false
                }, {
                    'value': '\'minimallight\'',
                    'computed': false
                }]
            },
            'required': true,
            'description': '',
            'defaultValue': {
                'value': '\'primary\'',
                'computed': false
            }
        },
        'text': {
            'type': {
                'name': 'string'
            },
            'required': true,
            'description': ''
        },
        'icon': {
            'type': {
                'name': 'string'
            },
            'required': false,
            'description': ''
        },
        'disabled': {
            'type': {
                'name': 'bool'
            },
            'required': false,
            'description': ''
        },
        'danger': {
            'type': {
                'name': 'bool'
            },
            'required': false,
            'description': ''
        },
        'fullwidth': {
            'type': {
                'name': 'bool'
            },
            'required': false,
            'description': ''
        }
    }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
    STORYBOOK_REACT_CLASSES['test/fixtures/case10/actual.js'] = {
        name: 'Button',
        docgenInfo: Button.__docgenInfo,
        path: 'test/fixtures/case10/actual.js'
    };
}