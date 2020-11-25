import React from 'react'

const Board = props => {
  const { board, handleClick } = props

  return (
    board.rows.map(row => (
      <div key={Math.random()} className='row'>
        {row.map(cell => (
          <div
            key={Math.random()}
            onClick={handleClick}
            row={cell.row}
            col={cell.col}
            className='cell'>
              {cell.value}
          </div>
        ))}
      </div>
    ))
  )
}

export default Board