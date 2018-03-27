import { applyMiddleware, createStore, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'

// reducers
import search from './reducers/search'

const reducer = combineReducers({
  search
})

const middlewares = [thunkMiddleware]

export const persistWhitelist = [
  'search'
]

export default compose(
  applyMiddleware(...middlewares),
  autoRehydrate(),
  global.reduxNativeDevTools ? global.reduxNativeDevTools() : noop => noop,
)(createStore)(reducer)