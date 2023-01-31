/*
Write a function, permutations, that takes in an array an argument. The function should return a 2D array where each subarray represents one of the possible permutations of the array.

The subarrays may be returned in any order.

You may assume that the input array contains unique elements.
*/

//best case: input is empty array - return [[]]
//create recursive traversal at each el
//take out the curr el and 

function permutations <T>(array: Array<T>): Array<Array<T>>{
  if (array.length === 0) return [[]];

  const firstEl = array[0];
  const possiblePerms = permutations(array.slice(1))

  const allPermutations: Array<Array<T>> = [];

  for (let perm of possiblePerms){
    for (let i = 0; i <= perm.length; i++){
      allPermutations.push([...perm.slice(0, i), firstEl, ...perm.slice(i)])
    }
  }

  return allPermutations;
}

module.exports = permutations;