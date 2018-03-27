import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

// Actions
import {
  setLocation,
  setFlatType,
  setRecentSearch,
  setSearchFocus,
  setSearchBlur,
} from '../../redux/actions/search'

// Components
import FlatSelect from '../flat-select'
import LocationInput from '../location-input'
import SearchResultItem from '../search-result-item'

// Services
import SearchService from '../../services/api/search-services'

// Utils
import { formatKeyword, getHref } from '../../utils'

class SearchForm extends Component {

  state = {
    predictions: [],
    selectedLocation: '' || this.props.name,
    lat: '',
    lng: '',
  }

  handleFlatType = (type) => {
    this.props.setFlatType({
      flatType: type
    })
  }

  handleChange = (name) => {
    this.setState({ selectedLocation: name })
    SearchService
      .getSuggest(name)
      .then((response) => {
        this.setState({
          predictions: name !== '' && response.predictions,
        })
      })
  }

  handleSelect = (name, placeId) => {
    const {
      setLocation,
      setRecentSearch,
      recentSearch,
      lat,
      lng,
    } = this.props
    SearchService
      .getPlace(placeId)
      .then(response => {
        this.setState({
          predictions: [],
          selectedLocation: name,
          lat: response.result.geometry.location.lat,
          lng: response.result.geometry.location.lng,
        })
        setLocation({
          name,
          placeId,
          lat: this.state.lat,
          lng: this.state.lng,
          photos: response.result.photos &&
            response.result.photos.map(item => {
              return getHref(item.html_attributions[0])
            })
        })
      })
      // removed duplicates of recent searches
      // remove this block of code if requirements needs
      // the recent searches with duplicate values
      _.includes(recentSearch, name) === false
        && setRecentSearch(name)
  }

  handleSubmit = () => {
    const { name, lat, lng } = this.props
    this.props.history.push({
      pathname: `/map-page`,
      search: `?keyword=${formatKeyword(name)}&lat=${lat}&lng=${lng}`
    })
  }

  handleInputFocus = (value) => {
    console.log('focus')
    const { setSearchFocus } = this.props
    setSearchFocus(value)
  }

  handleInputBlur = (value) => {
    console.log('blur')
    const { setSearchBlur } = this.props
    setSearchBlur(value)
  }

  render() {
    const {
      predictions,
      selectedLocation,
    } = this.state
    const {
      isStacked,
      recentSearch,
      isSearchFocus,
    } = this.props
    return (
      <div className="searchbox">
        <div className={`field-body ${isStacked && 'is-stacked'}`}>
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <LocationInput
                handleChange={this.handleChange}
                handleFocus={this.handleInputFocus}
                handleBlur={this.handleInputBlur}
                value={selectedLocation}
              />
            </div>
            <SearchResultItem
              predictions={predictions}
              handleSelect={this.handleSelect}
              recentSearches={recentSearch}
              showRecentSearch={isSearchFocus}
            />
          </div>
          <div className="field">
            <FlatSelect
              isFullWidth
              handleFlatType={this.handleFlatType}
            />
          </div>
          <div className="submit-container">
            <div className="control">
              <button
                onClick={() => this.handleSubmit()}
                type="submit"
                className="button is-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setLocation: bindActionCreators(setLocation, dispatch),
  setFlatType: bindActionCreators(setFlatType, dispatch),
  setRecentSearch: bindActionCreators(setRecentSearch, dispatch),
  setSearchFocus: bindActionCreators(setSearchFocus, dispatch),
  setSearchBlur: bindActionCreators(setSearchBlur, dispatch),
  dispatch,
})

const mapStateToProps = state => ({
  name: state.search.name,
  lat: state.search.lat,
  lng: state.search.lng,
  predictions: state.search.predictions,
  flatType: state.search.flatType,
  recentSearch: state.search.recentSearch,
  isSearchFocus: state.search.isSearchFocus,
})

SearchForm.propTypes = {
  setFlatType: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  setRecentSearch: PropTypes.func.isRequired,
  setSearchFocus: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
