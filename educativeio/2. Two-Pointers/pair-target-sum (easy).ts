//init pointer for start of array
//init pointer for end of array
//init while loop where end > start
  //check if sum of values at start and end === target, if true return [start, end]
  //else check if sum < target, if true increment start
  //else check if sum > target, if true decrement end
//return []

function pairTargetSum(array: Array<number>, target: number): Array<number> {
  let start = 0;
  let end = array.length - 1;
  while (end > start) {
    let pointerSum = array[start] + array[end];
    if (pointerSum === target) return [start, end];
    else if (pointerSum < target) start += 1;
    else end -= 1;
  }
  return [];
};

module.exports = pairTargetSum;