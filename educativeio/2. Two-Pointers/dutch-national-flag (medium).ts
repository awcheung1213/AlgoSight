//use three pointers, 0s go before 'low', 2s after 'high', 1s go in-between 'low' and 'high'
//init low = 0
//init high = array.length - 1
//init a for loop with pointer = 0
  //if the value at pointer is === 0, swap with the value at low and increment low and pointer
  //if the value at pointer is === 2, swap with the value at high and decrement high
  //else increment pointer
//return array

//use pointers to section off the 0s, 1s, and 2s
//use a third pointer to check each number in the array and swap with values of the other two pointers based on its value
//return the array

function dutchNationalFlag(array: Array<number>): Array<number> {
  let low = 0
  let high = array.length - 1;
  let pointer = 0;
  while (pointer <= high) {
    let pointerValue = array[pointer]
    if (pointerValue === 0) {
      [array[pointer], array[low]] = [array[low], array[pointer]];
      low += 1;
      pointer += 1;
    }
    else if (pointerValue === 2) {
      [array[pointer], array[high]] = [array[high], array[pointer]];
      high -= 1;
    }
    else pointer += 1;
  }
  return array;
}

module.exports = dutchNationalFlag;