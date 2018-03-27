import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import SearchView from './search'

class Search extends Component {
  render() {
    return (
      <div>
        <SearchView { ...this.props } />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

Search.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
