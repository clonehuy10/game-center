export const drawBoard = num => {
  const rows = []
    for (let i = 0; i < num; i++) {
      const row = []
      for (let j = 0; j < num; j++) {
        const cell = {
          row: i,
          col: j,
          value: ''
        }
        row.push(cell)
      }
      rows.push(row)
    }
  
  return rows
}

export const checkWinner = (board, row, col, player) => {
  // board size
  const size = board.rows.length - 1

  // horizontal
  const horizontal = () => {
    let count = 1

    // moving right
    for (let i = 1; i < 5; i++) {
      // stop when going out of the board
      if (parseInt(col) + i > size) {
        break
      }
      if(board.rows[row][col].value === board.rows[row][parseInt(col) + i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }
    // moving left
    for (let i = 1; i < 5; i++) {
      // stop when going out of the board
      if (parseInt(col) - i < 0) {
        break
      }
      if(board.rows[row][col].value === board.rows[row][parseInt(col) - i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }

    // 5 points then return true
    return count >= 5 ? true : false
  }

  // vertical
  const vertical = () => {
    let count = 1

    // moving down
    for (let i = 1; i < 5; i++) {
      // stop when going out of the board
      if (parseInt(row) + i > size) {
        break
      }
      if(board.rows[row][col].value === board.rows[parseInt(row) + i][col].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }
    // moving up
    for (let i = 1; i < 5; i++) {
      // stop when going out of the board
      if (parseInt(row) - i < 0) {
        break
      }
      if(board.rows[row][col].value === board.rows[parseInt(row) - i][col].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }

    // 5 points then return true
    return count >= 5 ? true : false
  }

  // diagonal
  const diagonal1 = () => {
    let count = 1

    // moving down right
    for (let i = 1; i < 5; i++) {
      // stop when going out of the board
      if (parseInt(row) + i > size || parseInt(col) + i > size) {
        break
      }
      if(board.rows[row][col].value === board.rows[parseInt(row) + i][parseInt(col) + i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }
    // moving up left
    for (let i = 1; i < 5; i++) {
      // stop when going out of the board
      if (parseInt(row) - i < 0 || parseInt(col) - i < 0) {
        break
      }
      if(board.rows[row][col].value === board.rows[parseInt(row) - i][parseInt(col) - i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }

    // 5 points then return true
    return count >= 5 ? true : false
  }

  // diagonal
  const diagonal2 = () => {
    let count = 1

    // moving up right
    for (let i = 1; i < 5; i++) {
      // stop when going out of the board
      if (parseInt(row) - i < 0 || parseInt(col) + i > size) {
        break
      }
      if(board.rows[row][col].value === board.rows[parseInt(row) - i][parseInt(col) + i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }
    // moving down left
    for (let i = 1; i < 5; i++) {
      // stop when going out of the board
      if (parseInt(row) + i > size || parseInt(col) - i < 0) {
        break
      }
      if(board.rows[row][col].value === board.rows[parseInt(row) + i][parseInt(col) - i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }

    // 5 points then return true
    return count >= 5 ? true : false
  }

  // check tie
  const tie = () => {
    return board.rows.every(row => row.every(col => col.value !== ''))
  }

  // if any case is true, return result basing on who's wining
  if (horizontal() || vertical() || diagonal1() || diagonal2()) {
    let result
    board.rows[row][col].value === player ? result = 10 : result = -10

    return result
  } else if (tie()) {
    return 0
  }

  return 1
}