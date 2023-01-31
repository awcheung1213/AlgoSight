/**
 Write a function, subsets, that takes in an array as an argument. The function should return a 2D array where each subarray represents one of the possible subsets of the array.
The elements within the subsets and the subsets themselves may be returned in any order.
You may assume that the input array contains unique elements.
 */


//iterate through the array
//at each char push into finalArray
//
function subsets(array: Array<string>): Array<Array<string>>{
  if (array.length == 0) return [[]];

  const firstEl = array[0]
  const subsetsWithoutEl = subsets(array.slice(1));
  const subsetsWithEl = subsetsWithoutEl.map((sub) => [firstEl, ...sub])
  return [...subsetsWithoutEl, ...subsetsWithEl]
};

console.log(subsets(['a', 'b']))

/*
[ 
  [], 
  [ 'b' ], 
  [ 'a' ], 
  [ 'a', 'b' ] 
]
*/
module.exports = subsets;