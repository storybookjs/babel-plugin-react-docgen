// @flow
import React from 'react'

type PropsType = {
  /** The text to be rendered in the button */
  label: number,
  /** Some other prop */
  thing?: string,
}

class FlowTypeButton extends React.Component<PropsType> {
  handleClick = (bar?: string) => {
    console.log(bar);
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.label}</button>
  }
}

export default FlowTypeButton
