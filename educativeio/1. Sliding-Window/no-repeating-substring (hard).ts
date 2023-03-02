//init longestLength = 0
//init start = 0
//init visitedChars = {}
//init for loop with end = 0
  //add value at end to visitedChars
  //increment longestLength
  //while visitedChars[value at end] > 1
    //decrement value of start in visitedChars
    //increment start
  //update longestLength
//return longestLength

function noRepeatingSubstring(string: string): number {
  let longestLength = 0;
  let start = 0;
  let windowLength = 0;
  const visitedChars = {};
  for (let end = 0; end < string.length; end++){
    let char = string[end];
    if (char in visitedChars) {
      visitedChars[char] += 1;
    }
    else {
      visitedChars[char] = 1;
    }
    windowLength += 1;
    while (visitedChars[char] > 1) {
      let charStart = string[start];
      visitedChars[charStart] -= 1;
      start += 1;
      windowLength -= 1;
    }
    longestLength = Math.max(longestLength, windowLength)
  }
  return longestLength;
};

module.exports = noRepeatingSubstring;