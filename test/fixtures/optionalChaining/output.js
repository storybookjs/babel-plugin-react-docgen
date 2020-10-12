// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should optionalChaining 1`] = `
"\\"use strict\\";

Object.defineProperty(exports, \\"__esModule\\", {
  value: true
});
exports[\\"default\\"] = void 0;

var _propTypes = _interopRequireDefault(require(\\"prop-types\\"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }

var OptionalChainingComponent = function OptionalChainingComponent(props) {
  return React.createElement(React.Fragment, null, React.createElement(\\"div\\", null, props === null || props === void 0 ? void 0 : props.text), React.createElement(\\"div\\", null, props === null || props === void 0 ? void 0 : props.optionalText));
};

OptionalChainingComponent.propTypes = {
  /** Required text */
  text: _propTypes[\\"default\\"].string.isRequired,

  /** Optional text, checked with optional chaining */
  optionalText: _propTypes[\\"default\\"].string
};
OptionalChainingComponent.__docgenInfo = {
  \\"description\\": \\"\\",
  \\"methods\\": [],
  \\"displayName\\": \\"OptionalChainingComponent\\",
  \\"props\\": {
    \\"text\\": {
      \\"type\\": {
        \\"name\\": \\"string\\"
      },
      \\"required\\": true,
      \\"description\\": \\"Required text\\"
    },
    \\"optionalText\\": {
      \\"type\\": {
        \\"name\\": \\"string\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Optional text, checked with optional chaining\\"
    }
  }
};
var _default = OptionalChainingComponent;
exports[\\"default\\"] = _default;

if (typeof STORYBOOK_REACT_CLASSES !== \\"undefined\\") {
  STORYBOOK_REACT_CLASSES[\\"relativePath(input.js)\\"] = {
    name: \\"OptionalChainingComponent\\",
    docgenInfo: OptionalChainingComponent.__docgenInfo,
    path: \\"relativePath(input.js)\\"
  };
}"
`;
