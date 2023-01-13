/*
Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. The function should return the maximum sum of non-adjacent elements in the array. There is no limit on how many elements can be taken into the sum as long as they are not adjacent.


*/
function nonAdjacentSum(numbers: Array<number>): number{
  //recursively add all non-adjacent nums in the array and return the maximum value
  //memoize already summed combinations
  
  //init a map object using closure

  //define a recursive helper func to sum all nonadj nums in array. inputs: array
  /**
   base cases:
   if the array is empty return 0
   if we encounter a num in the map object return the cached value
  */
  //add the curr number with the non adj nums
  //add the curr number with adj nums
  //return the max of those vals
  const map = new Map<number, number>()

  function _nonAdjacentSum(numbers, index = 0){
    if (index >= numbers.length) return 0;
    if (index in map) return map[index];

    const include = numbers[index] + _nonAdjacentSum(numbers, index + 2)
    const exclude = _nonAdjacentSum(numbers, index + 1)

    map[index] = Math.max(include, exclude)
    return map[index]
  }

  return _nonAdjacentSum(numbers);
}

module.exports = nonAdjacentSum;