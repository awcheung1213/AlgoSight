//use sliding window
//init output = []
//init product = 1
//init start
//init for loop with end = 0
  //add value at end to window
  //while product >= target, shrink window
    //remove value at start from product, increment start
  //iterate through current subarray and push all of its subarrays into output
//return output

function subarraysProductLTT(array: Array<number>, target: number): Array<Array<number>> {
  const output: Array<Array<number>> = [];
  let product = 1;
  let start = 0;
  for (let end = 0; end < array.length; end++) {
    let valueEnd = array[end];
    product *= valueEnd;
    while (product >= target) {
      let valueStart = array[start];
      product /= valueStart;
      start += 1;
    }
    let tempArray: Array<number> = [];
    for (let i = end; i > start - 1; i--) {
      tempArray.unshift(array[i]);
      output.push(tempArray.slice()); //need to slice to create new objects in memory, otherwise the output array will be mutated
    }
  }
  return output;
};  

module.exports = subarraysProductLTT;