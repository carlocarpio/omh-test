/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'

// Components
import SearchForm from '../../components/search-form'
import GoogleMap from '../../components/map'

const MapView = props => {
  const { lat, lng } = props
  return (
    <div className="container map">
      <aside className="map-search">
        <SearchForm
          {...props}
          isStacked
        />
      </aside>
      <div className="map-content">
        <GoogleMap
          lat={lat}
          lng={lng}
        />
      </div>
    </div>
  )
}

MapView.defaultProps = {
  isStacked: false,
}

MapView.propTypes = {
  isStacked: PropTypes.bool,
}

export default MapView
