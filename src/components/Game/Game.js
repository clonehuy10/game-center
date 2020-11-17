import React, { useState } from 'react'
import './Game.css'

import Board from './Board'
import { drawBoard, checkWinner } from '../Logic/Logic'

const Game = () => {
  const [board, setBoard] = useState({
    rows: []
  })
  const [player, setPlayer] = useState('')

  // Start game
  const handleStart = e => {
    const result = drawBoard(e.target.id)
    setBoard({ rows: result })
  }

  // Play game
  const handleClick = e => {
    // Get row and col from html attributes
    const row = e.target.attributes.row.value
    const col = e.target.attributes.col.value
    
    const copy = Object.assign({}, board)
    copy.rows[row][col].value = player

    setBoard(copy)
    
    // check winner after current move
    // function takes a BOARD, and location of CURRENT move
    console.log(checkWinner(copy, row, col))
  }

  // buttons to choose X or O for player
  let buttons
  if (player.length === 0) {
    buttons = (
      <div>
        <button onClick={e => setPlayer(e.target.innerText)}>X</button>
        <button onClick={e => setPlayer(e.target.innerText)}>O</button>
      </div>
    )
  }

  // buttons to pick game
  let pickGame
  if (board.rows.length === 0) {
    pickGame = (
      <div>
        <button onClick={handleStart} id='7'>Small</button>
        <button onClick={handleStart} id='10'>Medium</button>
        <button onClick={handleStart} id='15'>Large</button>
      </div>
    )
  }

  return (
    <div className='container'>
      {buttons}
      {pickGame}
      <Board board={board} handleClick={handleClick} />
    </div>
  )
}

export default Game