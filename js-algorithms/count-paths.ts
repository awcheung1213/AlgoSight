/*
Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

*/

function countPaths(grid: Array<Array<string>>): number{
  let count = 0;

  function _countPaths(grid, row = 0, col = 0): number{
    if (!grid[row][col] || grid[row][col] === 'X') return 0
    if (grid[row][col] === 'O') return 1
    
    count += _countPaths(grid, row + 1, col)
    count += _countPaths(grid, row, col + 1)

    return count
  }

  count += _countPaths(grid)
  return count
}

module.exports = countPaths;