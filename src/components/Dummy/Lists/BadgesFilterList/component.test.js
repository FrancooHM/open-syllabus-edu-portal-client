import React from 'react'
import ReactDOM from 'react-dom'
import BadgesFilterList from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BadgesFilterList paramsList={[{},{}]}/>, div)
})
