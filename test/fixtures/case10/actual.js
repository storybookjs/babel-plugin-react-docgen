import React, { PropTypes } from 'react';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as s from './Button.scss';
import * as icons from '../icons/MaterialIcons.scss';

const propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'flat', 'flatlight', 'minimal', 'minimallight']).isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    danger: PropTypes.bool,
    fullwidth: PropTypes.bool,
};

const defaultProps = {
    type: 'primary',
};

class Button extends React.Component {

    render() {
        const { icon, text, type, disabled, danger, fullwidth } = this.props;

        const className = classnames(s.root, s[type], {
            [s.danger]: danger,
            [s.disabled]: disabled,
            [s.fullwidth]: fullwidth,
        });

        return (
            <button className={className}>
                {icon && <i className={icons.materialIcons}>{icon}</i>}
                {text}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withStyles(s, icons)(Button);
