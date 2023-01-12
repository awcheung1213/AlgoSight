/*
Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

*/

function countPaths(grid: Array<Array<string>>): number{
  let count = 0;
  const map = new Map<string, number>()

  function _countPaths(grid, row = 0, col = 0): number{
    if (row == grid.length || col == grid[0].length || grid[row][col] == 'X') return 0;
    if (row == grid.length - 1 && col == grid[0].length - 1) return 1;
    if (`row${row}col${col}` in map) return map[`row${row}col${col}`];
    
    const downwards = _countPaths(grid, row + 1, col)
    const right = _countPaths(grid, row, col + 1)

    map[`row${row}col${col}`] = downwards + right

    return map[`row${row}col${col}`]
  }

  count += _countPaths(grid)
  return count
}

module.exports = countPaths;