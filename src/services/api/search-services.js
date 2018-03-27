import request from '../shared/request'

function getSuggest(name) {
  return request({
    url: `autocomplete?input=${name}`,
    method: 'GET'
  })
}

function getPlace(id) {
  return request({
    url: `places?place_id=${id}`,
    method: 'GET'
  })
}

const SearchService = {
  getSuggest,
  getPlace,
}

export default SearchService