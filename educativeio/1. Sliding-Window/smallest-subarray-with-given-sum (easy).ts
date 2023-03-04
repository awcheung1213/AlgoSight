//init smallestLength = 0
//init start
//init windowSum
//init for loop with end = 0
  //add value of index end to windowSum
  //if windowSum >= s
    //update smallestLength 
    //while windowSum >= s
      //subtract value of index start from windowSum
      //increment start

function smallest_subarray(array: Array<number>, s: number): number{
  let smallestLength = Infinity;
  let start = 0;
  let windowSum = 0;
  for (let end = 0; end < array.length; end++){
    let charEnd = array[end];
    windowSum += charEnd;
    while (windowSum >= s) {
      smallestLength = Math.min(smallestLength, end - start + 1);
      let charStart = array[start];
      windowSum -= charStart;
      start++;
    }
  }
  return smallestLength === Infinity ? 0 : smallestLength;
};

module.exports = smallest_subarray;