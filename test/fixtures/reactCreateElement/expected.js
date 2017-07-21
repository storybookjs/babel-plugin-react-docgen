'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Kitten = function Kitten(_ref) {
  var isWide = _ref.isWide,
      isLong = _ref.isLong;
  return _react2.default.createElement('img', { width: isWide ? '500' : '200', height: isLong ? '500' : '200', src: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg' });
};

Kitten.propTypes = {
  /** Whether the cat is wide */
  isWide: _propTypes2.default.bool,
  /** Whether the cat is long */
  isLong: _propTypes2.default.bool
};

Kitten.defaultProps = {
  isWide: false,
  isLong: false
};

exports.default = Kitten;
Kitten.__docgenInfo = {
  'description': '',
  'props': {
    'isWide': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Whether the cat is wide',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isLong': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Whether the cat is long',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/reactCreateElement/actual.js'] = {
    name: 'Kitten',
    docgenInfo: Kitten.__docgenInfo,
    path: 'test/fixtures/reactCreateElement/actual.js'
  };
}