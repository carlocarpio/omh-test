import React from 'react'
import PropTypes from 'prop-types'

const SearchResultItem = props => {
  const {
    predictions,
    handleSelect,
    recentSearches,
    showRecentSearch,
  } = props
  return (
    <nav className="panel">
      { predictions && predictions.map(item => (
          <a
            key={item.place_id}
            className="panel-block"
            onClick={() => handleSelect(item.description, item.place_id)}
          >
            {item.description}
          </a>
      )) }
      <div>
        { recentSearches.length > 0
          && showRecentSearch
          ? <p className="recent-search">Recent Searches</p>
          : null}
        { showRecentSearch && recentSearches.map((item, index) => (
          <small
            key={index}
            className="panel-block"
          >
            {item}
          </small>
        )) }
      </div> 
    </nav>

  )
}

SearchResultItem.propTypes = {
  predictions: PropTypes.array.isRequired,
}

export default SearchResultItem