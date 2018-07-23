"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Child = function Child() {
  return _react.default.createElement("div", null, "Sample");
};

function FuncDeclaration(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", null, children, _react.default.createElement(Child, null));
}

FuncDeclaration.propTypes = {
  children: _react.PropTypes.node
};
var _default = FuncDeclaration;
exports.default = _default;
FuncDeclaration.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FuncDeclaration",
  "props": {
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["test/fixtures/functionDeclaration/actual.js"] = {
    name: "FuncDeclaration",
    docgenInfo: FuncDeclaration.__docgenInfo,
    path: "test/fixtures/functionDeclaration/actual.js"
  };
}