import React from 'react'
import ReactDOM from 'react-dom'
import ArrowUp from './component'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <ArrowUp color="#FFFFFF"/>, div)
})
