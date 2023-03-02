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

function longestSubarrayReplace(array: Array<number>, k: number): number {
  let longestLength = 0;
  let start = 0;
  let maxCountOfOnes = 0;
  const charCount = {
    0: 0,
    1: 0
  }
  for (let end = 0; end < array.length; end++) {
    let charEnd = array[end];
    charCount[charEnd] += 1;
    maxCountOfOnes = charCount[1]
    if (end - start + 1 - maxCountOfOnes > k) {
      let charStart = array[start];
      charCount[charStart] -= 1;
      start++;
    }
    longestLength = Math.max(longestLength, end - start + 1)
  }
  return longestLength;
}; 

module.exports = longestSubarrayReplace;