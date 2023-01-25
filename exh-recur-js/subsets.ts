/**
 Write a function, subsets, that takes in an array as an argument. The function should return a 2D array where each subarray represents one of the possible subsets of the array.
The elements within the subsets and the subsets themselves may be returned in any order.
You may assume that the input array contains unique elements.
 */

function subsets(array: Array<string>): Array<Array<string>>{
  const allSubArrays: Array<Array<string>> = [];
  if (array.length == 0) return [];

  for (let i = 0; i < array.length; i++){
    
  }

  return allSubArrays;
};

module.exports = subsets;