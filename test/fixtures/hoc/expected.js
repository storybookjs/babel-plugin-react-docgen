"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Super tiny component
 */
var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Component;
}(React.Component);

Component.propTypes = {
  /** Description for children */
  children: React.PropTypes.string.isRequired,
  /**
   * What happens onClick stays onClick
   */
  onClick: React.PropTypes.func,
  /** Fancy styles in here */
  style: React.PropTypes.object
};

exports.default = withHoc(Component);
Component.__docgenInfo = {
  "description": "Super tiny component",
  "displayName": "Component",
  "props": {
    "children": {
      "type": {
        "name": "custom",
        "raw": "React.PropTypes.string.isRequired"
      },
      "required": false,
      "description": "Description for children"
    },
    "onClick": {
      "type": {
        "name": "custom",
        "raw": "React.PropTypes.func"
      },
      "required": false,
      "description": "What happens onClick stays onClick"
    },
    "style": {
      "type": {
        "name": "custom",
        "raw": "React.PropTypes.object"
      },
      "required": false,
      "description": "Fancy styles in here"
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["test/fixtures/hoc/actual.js"] = {
    name: "Component",
    docgenInfo: Component.__docgenInfo,
    path: "test/fixtures/hoc/actual.js"
  };
}