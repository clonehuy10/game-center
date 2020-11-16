import React, { useState } from 'react'
import './Game.css'

import Board from './Board'
import { drawBoard } from '../Logic/Logic'

const Game = () => {
  const [board, setBoard] = useState({
    rows: []
  })

  const handleStart  = e => {
    const result = drawBoard(e.target.id)
    setBoard({ rows: result })
    console.log('board', board)
  }

  const handleClick = e => {
    console.log(e.target)
  }

  return (
    <div className='container'>
      <button onClick={handleStart} id='16'>Start</button>
      <Board board={board} handleClick={handleClick} />
    </div>
  )
}

export default Game