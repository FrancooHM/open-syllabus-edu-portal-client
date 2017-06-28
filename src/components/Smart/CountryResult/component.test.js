import React from 'react'
import ReactDOM from 'react-dom'
import SmartCountryResult from './component'
import {Provider} from 'react-redux'
import store from '../../../store/index.js'


test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <SmartCountryResult
          location={{query:{id:1}}}
        />
      </Provider>
      , div)
})