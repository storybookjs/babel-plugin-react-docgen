class Component extends React.Component {
  render() { return null }
}

Component.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
}

export default withHoc()(deeperHoc(Component))
