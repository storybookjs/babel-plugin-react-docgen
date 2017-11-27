"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoc = hoc;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function hoc(Inner) {
  var C1 = function C1(props) {
    return _react.default.createElement(ActualC1, props);
  };

  var C2 = function C2(props) {
    return _react.default.createElement(ActualC2, props);
  };

  return {
    C1: C1,
    C2: C2
  };
}

var ActualC1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActualC1, _React$Component);

  function ActualC1() {
    _classCallCheck(this, ActualC1);

    return _possibleConstructorReturn(this, (ActualC1.__proto__ || Object.getPrototypeOf(ActualC1)).apply(this, arguments));
  }

  _createClass(ActualC1, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null);
    }
  }]);

  return ActualC1;
}(_react.default.Component);

var ActualC2 =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ActualC2, _React$Component2);

  function ActualC2() {
    _classCallCheck(this, ActualC2);

    return _possibleConstructorReturn(this, (ActualC2.__proto__ || Object.getPrototypeOf(ActualC2)).apply(this, arguments));
  }

  _createClass(ActualC2, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null);
    }
  }]);

  return ActualC2;
}(_react.default.Component);