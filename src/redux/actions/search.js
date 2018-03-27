import {
  SET_LOCATION,
  SET_FLAT_TYPE,
  SET_RECENT_SEARCH,
  SET_SEARCH_FOCUS,
  SET_SEARCH_BLUR,
} from '../constants'

export function setLocation(data) {
  return dispatch => dispatch({
    type: SET_LOCATION,
    payload: data,
  })
}

export function setFlatType(data) {
  return dispatch => dispatch({
    type: SET_FLAT_TYPE,
    payload: data,
  })
}

export function setRecentSearch(data) {
  return dispatch => dispatch({
    type: SET_RECENT_SEARCH,
    payload: data,
  })
}

export function setSearchFocus(data) {
  return dispatch => dispatch({
    type: SET_SEARCH_FOCUS,
    payload: data,
  })
}

export function setSearchBlur(data) {
  return dispatch => dispatch({
    type: SET_SEARCH_BLUR,
    payload: data,
  })
}



