import React from 'react'
import PropTypes from 'prop-types'

const LocationInput = props => {
  const {
    handleChange,
    handleFocus,
    handleBlur,
    value
  } = props
  return (
    <div className="control has-icons-left">
      <input
        className="input"
        type="text"
        placeholder="Search location..."
        onChange={(event) => handleChange(event.target.value)}
        onFocus={() => handleFocus(true)} 
        onBlur={() => handleBlur(false)} // can have seperate action for this one
        value={value}
      />
      <span className="icon is-small is-left">
        <i className="fa fa-map-marker fa-xs"></i>
      </span>
    </div>
  )
}

LocationInput.defaultProps = {
  value: ''
}

LocationInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default LocationInput
