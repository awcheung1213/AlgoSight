//sort the array
//init totalCount = 0
//init for loop with first = 0
  //init second = first + 1
  //init third = array.length - 1
  //while second < third
    //init currentSum = first + second + third
    //if currentSum === target, increment totalCount, increment second, decrement third
    //if currentSum < target, increment second
    //else decrement third
//return totalCount

function tripletsSmallerSum(array: Array<number>, target: number): number {
  array.sort((a, b) => a - b);
  let totalCount = 0;
  for (let first = 0; first < array.length; first ++) {
    let second = first + 1;
    let third = array.length - 1;
    while (second < third) {
      let currentSum = array[first] + array[second] + array[third];
      if (currentSum < target) {
        totalCount += third - second;
        second += 1;
      }
      else third -= 1;
    }
  }
  return totalCount;
};

module.exports = tripletsSmallerSum;