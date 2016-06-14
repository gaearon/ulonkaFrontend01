import React from 'react'
import {render} from 'react-dom'
import App from './App'

// We let Webpack generate HTML page
// so it's now on us to create the root DOM element.
const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

render(<App />, rootEl);
