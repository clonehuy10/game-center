import { checkWinner } from './Logic'

export const compMove = (board, player) => {
  // get board size and ai
  const size = board.rows.length - 1
  const ai = player === 'X' ? 'O' : 'X'

  // keep track of best move
  let bestScore = 1000
  let bestRow
  let bestCol

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // check if it's empty
      if (board.rows[i][j].value === '') {
        // make the move
        board.rows[i][j] = ai

        // computer score for this move
        // minimax(board, row, col, player, maximizingPlayer, alpha, beta)
        console.log('aaaaaa')
        const score = minimax(board, i, j, player, true, -1000, 1000)
        console.log('score', score)
        // undo the move
        board.rows[i][j] = ''

        // if the score is less than the current score, store it
        if (bestScore > score) {
          bestScore = score
          bestRow = i
          bestCol = j
        }
      }
    }
  }
  console.log('BEST', bestRow, bestCol)
  console.log('OH YEAH', board.rows[bestRow][bestCol])
  board.rows[bestRow][bestCol].value = ai

  return board
}

// minimax(board, row, col, maximizingPlayer, alpha, beta)
const minimax = (board, row, col, player, maximizingPlayer, alpha, beta ) => {
  const min = -10000
  const max = 10000

  // get board size and ai
  const size = board.rows.length - 1
  const ai = player === 'X' ? 'O' : 'X'
  const currentPlayer = maximizingPlayer ? player : ai
  const check = checkWinner(board, row, col, currentPlayer)
  console.log('Check', check)

  // break function
  if (check !== null) {
    return check
  }

  // if it's human player
  if (maximizingPlayer) {
    let best = min

    // recursive
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // check if it's empty
        if (board.rows[i][j] === '') {
        // make the move
        board.rows[i][j] = player

        // computer score for this move
        // minimax(board, row, col, player, maximizingPlayer, alpha, beta)
        const score = minimax(board, i, j, ai, false, alpha, beta)

        // undo the move
        board.rows[i][j] = ''

        // if the score is less than the current score, store it
        best = Math.max(best, score)
        alpha = Math.max(best, alpha)

        // Alpha Beta Pruning
        if (beta <= alpha) {
          break
        }
      }
      }
    }

    return best
  } else {
    let best = max

    // recursive
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // check if it's empty
        if (board.rows[i][j] === '') {
        // make the move
        board.rows[i][j] = ai

        // computer score for this move
        // minimax(board, row, col, player, maximizingPlayer, alpha, beta)
        const score = minimax(board, i, j, player, true, alpha, beta)

        // undo the move
        board.rows[i][j] = ''

        // if the score is less than the current score, store it
        best = Math.min(best, score)
        beta = Math.min(best, beta)

        // Alpha Beta Pruning
        if (beta <= alpha) {
          break
        }
      }
      }
    }
  }
} 