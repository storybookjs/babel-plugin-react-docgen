import PropTypes from 'prop-types';

const OptionalChainingComponent = (props) => {
  return (
    <>
      <div>{props?.text}</div>
      <div>{props?.optionalText}</div>
    </>
  )
  
}

OptionalChainingComponent.propTypes = {
  /** Required text */
  text: PropTypes.string.isRequired,
  /** Optional text, checked with optional chaining */
  optionalText: PropTypes.string
}

export default OptionalChainingComponent
