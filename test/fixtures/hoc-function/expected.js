'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _testSelector = require('./testSelector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestComponent = function TestComponent(props) {
    var text = props.text,
        onClick = props.onClick;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            'Text: ',
            text
        ),
        _react2.default.createElement(
            'button',
            { onClick: onClick },
            'Button'
        )
    );
};

TestComponent.propTypes = {
    /** Text to display */
    text: _propTypes2.default.string,
    /** Called on click */
    onClick: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(_testSelector.mapStateToProps, _testSelector.mapDispatchToProps)(TestComponent);
TestComponent.__docgenInfo = {
    'description': '',
    'methods': [],
    'props': {
        'text': {
            'type': {
                'name': 'string'
            },
            'required': false,
            'description': 'Text to display'
        },
        'onClick': {
            'type': {
                'name': 'func'
            },
            'required': false,
            'description': 'Called on click'
        }
    }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
    STORYBOOK_REACT_CLASSES['test/fixtures/hoc-function/actual.js'] = {
        name: 'TestComponent',
        docgenInfo: TestComponent.__docgenInfo,
        path: 'test/fixtures/hoc-function/actual.js'
    };
}