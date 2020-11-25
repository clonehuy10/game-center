import { checkWinner } from './Logic'

export const compMove = (board, player) => {
  // get board size and ai
  const size = board.rows.length
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
        board.rows[i][j] = { ...board.rows[i][j], value: ai }

        // calculate score for this move
        // minimax(board, row, col, player, maximizingPlayer, alpha, beta)
        const score = minimax(1, board, i, j, player, true, -1000, 1000)

        // undo the move
        board.rows[i][j] = { ...board.rows[i][j], value: '' }
        
        // if the score is less than the current score, store it
        if (bestScore >= score) {
          bestScore = score
          bestRow = i
          bestCol = j
        }
      }
    }
  }
  if (bestScore === 1) {
    board.rows[Math.floor(Math.random()*size)][Math.floor(Math.random()*size)] = { ...board.rows[bestRow][bestCol], value: ai}
  } else {
    board.rows[bestRow][bestCol] = { ...board.rows[bestRow][bestCol], value: ai}
  }

  return board
}

// minimax(board, row, col, maximizingPlayer, alpha, beta)
const minimax = (depth, board, row, col, player, maximizingPlayer, alpha, beta ) => {
  // get board size and ai
  const size = board.rows.length
  const ai = player === 'X' ? 'O' : 'X'
  const check = checkWinner(board, row, col, player)
  // break function
  if (depth > 2) {
    return check
  }

  // if it's human player
  if (maximizingPlayer) {
    let best = -1000

    // recursive
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // check if it's empty
        if (board.rows[i][j].value === '') {
        // make the move
        board.rows[i][j] = { ...board.rows[i][j], value: player }

        // calculate score for this move
        // minimax(board, row, col, player, maximizingPlayer, alpha, beta)
        const score = minimax(depth++, board, i, j, player, false, alpha, beta)

        // undo the move
        board.rows[i][j] = { ...board.rows[i][j], value: '' }

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
    let best = 1000

    // recursive
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // check if it's empty
        if (board.rows[i][j].value === '') {
        // make the move
        board.rows[i][j] = { ...board.rows[i][j], value: ai }

        // calculate score for this move
        // minimax(board, row, col, player, maximizingPlayer, alpha, beta)
        const score = minimax(depth++, board, i, j, player, true, alpha, beta)

        // undo the move
        board.rows[i][j] = { ...board.rows[i][j], value: '' }

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

    return best
  }
} 