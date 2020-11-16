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