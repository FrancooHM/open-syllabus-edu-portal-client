import React from 'react'
import ReactDOM from 'react-dom'
import FeatureIcon1 from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FeatureIcon1 color="#FFFFFF"/>, div)
})
