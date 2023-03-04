//init output = []
//init start and end
//while start <= end 
  //if start === end, add start to output
  //else if square start > square end, add start to output, increment start
  //else if square end > start, add end to ouptut, decrement end
//return output

function squaringSortedArray(array: Array<number>): Array<number> {
  const output: Array<number> = new Array(array.length);
  let start = 0;
  let end = array.length - 1;
  let tracker = output.length - 1;
  while (start <= end) {
    let startSquared = Math.pow(array[start], 2);
    let endSquared = Math.pow(array[end], 2);
    if (startSquared < endSquared) {
      output[tracker] = endSquared;
      end -= 1;
    }
    else {
      output[tracker] = startSquared;
      start += 1;
    }
    tracker -= 1;
  }
  return output;
};

module.exports = squaringSortedArray;