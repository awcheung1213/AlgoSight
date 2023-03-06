//sort the array
//init result = []
//init for loop with a pointer for our 1st number
//init two pointers for our 2nd and 3rd number
//while 2nd pointer is < 3rd pointer
  //check if the sum of 2nd and 3rd === 0 - 1st, if true push all 3 indices into our result
  //if sum of 2nd and 3rd < 0 - 1st, increment 2nd
  //else decrement 3rd
//return result


function sumToZero(array: Array<number>): Array<Array<number>> {
  array.sort((a,b) => a - b);
  const result: Array<Array<number>> = [];
  for (let first = 0; first < array.length; first++) {
    let second = first + 1;
    let third = array.length - 1;
    let target = 0 - array[first];
    while (second < third && third < array.length) {
      let pointerSum = array[second] + array[third];
      if (pointerSum === target) {
        result.push([array[first], array[second], array[third]]);
        second += 1;
        third -=1;
      }
      else if (pointerSum < target) second += 1;
      else third -= 1
    }
  }
  return result;
};

module.exports = sumToZero;