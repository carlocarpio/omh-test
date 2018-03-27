import React from 'react'

// Components
import SearchForm from '../../components/search-form'

const SearchView = props => {
  return (
    <div className="container">
      <SearchForm {...props} />
    </div>
  )
}

export default SearchView
