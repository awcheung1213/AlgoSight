/*
 Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.
 */
function summingSquares(target: number): number{
  const map = new Map<number, number>();
  
  function _summingSquares(target){
    if (target === 0) return 0;
    if (target in map) return map[target];
    
    let minSum = Infinity;
    for (let i = 1; i <= Math.sqrt(target); i++){
       let numSquares = 1 + _summingSquares(target - Math.pow(i, 2))
       minSum = Math.min(minSum, numSquares)
    }
    map[target] = minSum;
    return minSum;
  }

  return _summingSquares(target);
}

module.exports = summingSquares;