// configureStore.js

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

// reducers
import search from '../reducers/search'

const persistConfig = {
  key: 'root',
  storage,
}

const loggerMiddleware = createLogger({
  collapsed: true,
})

const rootReducer = combineReducers({
  search,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
)
export const persistor = persistStore(store)

export default {
  store,
  persistor
}