import React from 'react'
import ReactDOM from 'react-dom'
import CheckIcon from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <CheckIcon/>, div)
})
