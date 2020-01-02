// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Add propType doc to react components should reactCreateClass 1`] = `
"\\"use strict\\";

var React = require('react');

var PropTypes = React.PropTypes;
var stylesheet = {};
/**
 * Component for displaying a container that resembles the original CSS environment for different themes
 */

var ComponentWrapper = React.createClass({
  displayName: \\"ComponentWrapper\\",
  propTypes: {
    /**
     * Theme to display
     */
    theme: PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      theme: 'damask'
    };
  },
  render: function render() {
    return React.createElement(\\"div\\", {
      className: stylesheet[this.props.theme]
    }, React.createElement(\\"div\\", {
      className: stylesheet.container
    }, this.props.children));
  }
});
module.exports = ComponentWrapper;
ComponentWrapper.__docgenInfo = {
  \\"description\\": \\"Component for displaying a container that resembles the original CSS environment for different themes\\",
  \\"methods\\": [],
  \\"props\\": {
    \\"theme\\": {
      \\"defaultValue\\": {
        \\"value\\": \\"'damask'\\",
        \\"computed\\": false
      },
      \\"type\\": {
        \\"name\\": \\"string\\"
      },
      \\"required\\": false,
      \\"description\\": \\"Theme to display\\"
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== \\"undefined\\") {
  STORYBOOK_REACT_CLASSES[\\"relativePath(input.js)\\"] = {
    name: \\"ComponentWrapper\\",
    docgenInfo: ComponentWrapper.__docgenInfo,
    path: \\"relativePath(input.js)\\"
  };
}"
`;
