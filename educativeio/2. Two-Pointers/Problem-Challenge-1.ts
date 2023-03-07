//sort the array
//init output = []
//init for loop with i = 1
  //init start = pointer + 1, end = array.length - 1
  //if value at pointer - 1 + pointer + start + end === 0, push into output, increment start, decrement end
  //if sum < target, increment start
  //if sum > target, decrement end

function problemChallenge1(array: Array<number>, target: number): Array<Array<number>> {
  array.sort((a, b) => a - b);
  const output: Array<Array<number>> = [];
  for (let i = 0; i < array.length - 3; i++) { //iterate through the array as the 1st number
    if (i > 0 && array[i] === array[i - 1]) continue; //make sure we do not have any duplicates for 1st number
    for (let j = i + 1; j < array.length - 2; j++) { //iterate through the array as the 2nd number
      if (j > i + 1 && array[j] === array[j - 1]) continue; //make sure we do not have any duplicates for 2nd number
      let start = j + 1;
      let end = array.length - 1;
      while (start < end) { //two pointer strategy to find our 3rd & 4th numbers
        let currentSum = array[i] + array[j] + array[start] + array[end];
        if (currentSum === target) { //found the quadruple that === target
          output.push([array[i], array[j], array[start], array[end]]);
          while (start < end && array[start] === array[start -1]) start += 1; //have our start pointer skip all duplicates
          while (start < end && array[end] === array[end + 1]) end -= 1; //have our end pointer skill all duplicates
          start += 1;
          end -= 1;
        }
        else if (currentSum < target) start += 1; //need a bigger sum
        else end -= 1; //need a smaller sum
      }
    }
  }
  return output;
}

module.exports = problemChallenge1;