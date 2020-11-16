import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'

import Game from '../Game/Game'

function App() {
  return (
    <div>
      <Route path='/' component={Game} />
    </div>
  )
}

export default App
