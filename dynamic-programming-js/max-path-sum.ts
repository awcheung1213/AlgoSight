/*
Write a function, maxPathSum, that takes in a grid as an argument. The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right.

You can assume that all numbers are non-negative.
*/

function maxPathSum(grid: Array<Array<number>>):number{
  const map = new Map<string, number>()
  
  function _maxPathSum(grid, row = 0, col = 0){
    if (row == grid.length || col == grid[0].length) return -Infinity;
    if (row == grid.length - 1 && col == grid[0].length - 1) return grid[row][col];
    if (`row${row}col${col}` in map) return map[`row${row}col${col}`];

    map[`row${row}col${col}`] = grid[row][col] + Math.max(_maxPathSum(grid, row+1, col), _maxPathSum(grid, row, col+1))

    return map[`row${row}col${col}`];
  }

  return _maxPathSum(grid)
}

module.exports = maxPathSum;