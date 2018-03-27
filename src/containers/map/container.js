import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Components
import MapView from './map'

class Map extends Component {
  render() {
    const { lat, lng, photos } = this.props
    return (
      <div>
        <MapView
          {...this.props}
          photos={photos}
          lat={lat || 1.3521} // add default lat of SG, we can put this inside a state in redux
          lng={lng || 103.8198} // add default lng of SG, we can put this inside a state in redux
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  photos: state.search.photos,
  name: state.search.name,
  lat: state.search.lat,
  lng: state.search.lng,
})

Map.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
