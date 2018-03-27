import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react'

// styles
import './styles/index.scss'

// stores
import { store, persistor } from './redux/store/configureStore'

// views
import MapView from './containers/map'
import SearchView from './containers/search'


class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div>
              <Route path="/search" component={SearchView} />
              <Route path="/map-page" component={MapView} />
            </div>
          </Router>
        </PersistGate>
      </Provider>

    )
  }
}

export default Root

