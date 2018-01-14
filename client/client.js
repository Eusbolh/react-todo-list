import React from 'react'

import { render } from 'react-dom'
/* This is equivalent of the upper line
var render = require('react-dom').render;
*/

import App from '../components/App'
// Two dots mean, to upper folder

render(
    // define the encompassing component,
    // DOM element we want to mount it to
    <App/>,
    document.getElementById('app')
)
