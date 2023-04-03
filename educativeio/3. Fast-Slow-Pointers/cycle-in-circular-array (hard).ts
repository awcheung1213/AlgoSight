
//in an array with +/- numbers that jump to other indices, check if there is a cycle with the following conditions:
  //cycle has more than 1 element
  //only contains one direction
//for each element in the array
  //check if there is a cycle using two pointers
  //traverse our pointers *define func*
  //if pointers meet there is a cycle and return true
  //if we go in the opposite direction continue to the next iteration of the loop
  //if the cycle only has 1 element break out of the loop
//return false if we traverse thru all the elements and dont find a cycle

function cycleCircularArray(array: Array<number>): boolean {
  for (let i = 0; i < array.length; i++) {
    let slow = i,
      fast = i;
    while (true) {
      slow = findNextIndex(slow, array[slow] > 0, array);
      fast = findNextIndex(fast, array[slow] > 0, array);
      if (fast != -1) findNextIndex(fast, array[slow] > 0, array);
      if (slow === -1 || fast === -1) break;
      if (slow === fast && slow != -1) return true;
    };
  };
  return false;
};
//if we go in the opposite direction continue to the next iteration of the loop
//if the cycle only has 1 element break out of the loop

function findNextIndex(currentIndex, isPositive, array): number {
  let nextIndex = currentIndex + array[currentIndex] % array.length;
  if (nextIndex < 0) {
    nextIndex = array.length + nextIndex;
  }
  if (currentIndex === nextIndex) return -1;
  else if (isPositive === true && array[nextIndex] < 0) return -1;
  else if (isPositive === false && array[nextIndex] > 0) return -1;
  else return nextIndex;
};

module.exports = cycleCircularArray;
      