/* eslint-disable no-undef */
import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { compose, withProps, withStateHandlers } from 'recompose'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Marker
      position={{ lat: props.lat, lng: props.lng }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: '#FFFFFF', width: 200, height: 200 }}>
        <InfoBox
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
          <div style={{ width: 200, height: 200 }}>
            <h2>This is where the images will render</h2>
            {/*
              dont know where/how will I get the image
              I can only get the response of a link
              and that link cannot be put as an src
              for the image
              (response.result.photos.html_attributtions)
            */}
            {/* <div>
              {props.photos && props.photos.map((url, index) => (
                <img key={index} src={url} />
              ))}
            </div> */}
          </div>
        </InfoBox>
        </div>
      </InfoBox>}
    </Marker>
  </GoogleMap>
)

const Map = props => {
  console.log(props)
  return (
    <StyledMapWithAnInfoBox
      lat={props.lat}
      lng={props.lng}
    />
  )
}

Map.propTypes = {}

export default Map
