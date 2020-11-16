import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './components/App/App'
import { HashRouter } from 'react-router-dom'

const jsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(jsx, document.getElementById('root'))

