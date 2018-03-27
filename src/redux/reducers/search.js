import { createReducer } from '../utils'
import {
  SET_LOCATION,
  SET_FLAT_TYPE,
  SET_RECENT_SEARCH,
  SET_SEARCH_FOCUS,
  SET_SEARCH_BLUR,
} from '../constants'

const initialState = {
  name: '',
  lat: '',
  lng: '',
  placeId: '',
  flatType: '',
  recentSearch: [],
  photos: [],
  isSearchFocus: false,
  isSearchBlur: false,
}

export default createReducer(initialState, {
  [SET_LOCATION]: (state, payload) => Object.assign({}, state, {
    name: payload.name,
    placeId: payload.placeId,
    lat: payload.lat,
    lng: payload.lng,
    photos: payload.photos
  }),
  [SET_FLAT_TYPE]: (state, payload) => Object.assign({}, state, {
    flatType: payload.flatType
  }),
  [SET_RECENT_SEARCH]: (state, payload) => Object.assign({}, state, {
    recentSearch: [...state.recentSearch, payload]
  }),
  [SET_SEARCH_FOCUS]: (state, payload) => Object.assign({}, state, {
    isSearchFocus: true,
    isSearchBlur: false,
  }),
  [SET_SEARCH_BLUR]: (state, payload) => Object.assign({}, state, {
    isSearchFocus: false,
    isSearchBlur: true,
  }),
})
