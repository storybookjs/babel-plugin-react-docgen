'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logo = require('./logo.svg');

var _logo2 = _interopRequireDefault(_logo);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    'div',
    { className: 'App' },
    _react2.default.createElement(
      'div',
      { className: 'App-header' },
      _react2.default.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' }),
      _react2.default.createElement(
        'h2',
        null,
        'Welcome to React'
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'App-intro' },
      'To get started, edit ',
      _react2.default.createElement(
        'code',
        null,
        'src/App.js'
      ),
      ' and save to reload.'
    )
  );
}

module.exports = App;
App.__docgenInfo = {
  'description': '',
  'displayName': 'App'
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/example-module-exports/actual.js'] = {
    name: 'App',
    docgenInfo: App.__docgenInfo,
    path: 'test/fixtures/example-module-exports/actual.js'
  };
}