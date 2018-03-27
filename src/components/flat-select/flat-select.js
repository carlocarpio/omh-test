import React from 'react'
import PropTypes from 'prop-types'

const FlatSelect = props => {
  const { isFullWidth, handleFlatType } = props
  const selectStyle = `select ${isFullWidth && 'is-fullwidth'}`
  return (
    <div className="control">
      <span className={selectStyle}>
        <select
          onChange={(event) => handleFlatType(event.target.value)}
        >
          {/* if more items it is good to map the options for this block */}
          <option>Flat Type</option>
          <option value="1 Room">1 Room</option>
          <option value="2 Room">2 Room</option>
          <option value="3 Room">3 Room</option>
          <option value="4 Room">4 Room</option>
        </select>
      </span>
    </div>
  )
}

FlatSelect.defaultProps = {
  isFullWidth: false,
}

FlatSelect.propTypes = {
  isFullWidth: PropTypes.bool,
  handleFlatType: PropTypes.func.isRequired,
}

export default FlatSelect
