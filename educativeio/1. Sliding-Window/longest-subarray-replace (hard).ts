//init longestLength = 0
//init start = 0
//init maxCountOfOnes = 0
//init charCount = {0: 0, 1: 0}
//init a for loop with end = 0
  //add char at end to charCount
  //update maxCountOfOnes
  //if length of window - maxCountOfOnes > k, shrink window
    //decrement char at start from charCount
    //increment start
  //update longestLength
//return longestLength

//extend a window and store total number of 1s
//when our window contains more than k 0s shrink
//return longest length with all ones

function longestSubarrayReplace(array: Array<number>, k: number): number {
  let longestLength = 0;
  let start = 0;
  const chars = {
    0: 0,
    1: 0,
  };
  for (let end = 0; end < array.length; end++) {
    let endChar = array[end];
    chars[endChar] += 1;
    while (chars[0] > k) {
      let startChar = array[start];
      chars[startChar] -= 1;
      start += 1;
    }
    longestLength = Math.max(longestLength, end - start + 1);
  }
  return longestLength;
}; 

module.exports = longestSubarrayReplace;