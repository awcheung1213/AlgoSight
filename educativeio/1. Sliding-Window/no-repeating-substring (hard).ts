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

//extend a window and store the longest length of window with no repeating chars
//shrink the window if we encounter a repeating char
//return the longest length

function noRepeatingSubstring(string: string): number {
  let longestLength = 0;
  let start = 0;
  const chars = {};
  for (let end = 0; end < string.length; end ++){
    let charEnd = string[end];
    if (charEnd in chars) {
      chars[charEnd] += 1;
    }
    else {
      chars[charEnd] = 1;
    }
    while (chars[charEnd] > 1) {
      let charStart = string[start];
      chars[charStart] -= 1;
      start += 1;
    }
    longestLength = Math.max(longestLength, end - start + 1)
  }
  return longestLength;
};

module.exports = noRepeatingSubstring;