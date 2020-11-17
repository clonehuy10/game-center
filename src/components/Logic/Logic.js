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

export const checkWinner = (board, row, col) => {
  // horizontal
  const horizontal = () => {
    let count = 1

    // moving right
    for (let i = 1; i < 5; i++) {
      if(board.rows[row][col].value === board.rows[row][parseInt(col) + i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }
    // moving left
    for (let i = 1; i < 5; i++) {
      if(board.rows[row][col].value === board.rows[row][parseInt(col) - i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }

    // 5 points then return true
    return count === 5 ? true : false
  }

  // vertical
  const vertical = () => {
    let count = 1

    // moving up
    for (let i = 1; i < 5; i++) {
      if(board.rows[row][col].value === board.rows[parseInt(row) + i][col].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }
    // moving down
    for (let i = 1; i < 5; i++) {
      if(board.rows[row][col].value === board.rows[parseInt(row) - i][col].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }

    // 5 points then return true
    return count === 5 ? true : false
  }

  // diagonal
  const diagonal1 = () => {
    let count = 1

    // moving downer right
    for (let i = 1; i < 5; i++) {
      if(board.rows[row][col].value === board.rows[parseInt(row) + i][parseInt(col) + i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }
    // moving upper left
    for (let i = 1; i < 5; i++) {
      if(board.rows[row][col].value === board.rows[parseInt(row) - i][parseInt(col) - i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }

    // 5 points then return true
    return count === 5 ? true : false
  }

  // diagonal
  const diagonal2 = () => {
    let count = 1

    // moving upper right
    for (let i = 1; i < 5; i++) {
      if(board.rows[row][col].value === board.rows[parseInt(row) - i][parseInt(col) + i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }
    // moving downer left
    for (let i = 1; i < 5; i++) {
      if(board.rows[row][col].value === board.rows[parseInt(row) + i][parseInt(col) - i].value) {
        count += 1
      } else {
        // hit a block, then stop
        break
      }
    }

    // 5 points then return true
    return count === 5 ? true : false
  }

  // if any case is true, return true
  if (horizontal() || vertical() || diagonal1() || diagonal2()) {
    return true
  }
  return false
}