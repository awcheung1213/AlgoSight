//find the smallest sum that is closest to the target sum in the array
//use three pointers
//sort the array
//init closestSum = Infinity
//init for loop with first = 0
  //init second = first + 1
  //init third = array.length - 1
  //init pointerSum == second + third
  //while second < third
    //if abs(pointerSum - target) < closestSum, update closestSum to pointerSum and increment second
    //if abs(pointerSum - target) === closestSum, update closestSum to min(pointerSum, closestSum) and increment second, decrement third
    //else increment third
//return closestSum

function tripletSumTarget(array: Array<number>, target: number): number {
  array.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let first = 0; first < array.length; first++) {
    let second = first + 1;
    let third = array.length - 1;
    while (second < third) {
      let currentSum = array[first] + array[second] + array[third];
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
        second += 1;
      }
      else if (Math.abs(currentSum - target) === Math.abs(closestSum - target)) {
        closestSum = Math.min(closestSum, currentSum);
        second += 1;
        third -=1;
      }
      else third += 1;
    }
  }
  return closestSum;
};

module.exports = tripletSumTarget;