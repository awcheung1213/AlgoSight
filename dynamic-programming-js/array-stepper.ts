/**
 Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.
 */

function arrayStepper(nums: Array<number>): boolean{
  const map = new Map<number, boolean>();

  function _arrayStepper(nums, index = 0){
    if (index === nums.length - 1) return true;
    if (index >= nums.length) return false;
    if (index in map) return map[index];

    let indexValue = nums[index]
    for (let i = 1; i <= indexValue; i++){
      const steps = index + i;
      if (_arrayStepper(nums, steps) === true){
        map[index] = true;
        return true;
      }
    }
    map[index] = false;
    return false;
  }

  return _arrayStepper(nums);
}

module.exports = arrayStepper;