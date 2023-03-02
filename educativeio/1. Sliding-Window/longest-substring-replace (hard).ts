//what is the state we are trying to maintain across each iteration?
//the count of the max repeating character. Use this and k to decide when to move the window

//init longestLength = 0
//init start = 0
//init maxCharCount = 0
//init letterCount = {}
//init a for loop with end = 0
  //add char at end to letterCount
  //update maxCharCount
  //if current length of substring - maxCharCount > k, shrink window
    //decrement char at start from letterCount
    //increment start
  //update longestLength
//return longestLength

function longestSubstringReplace(string: string, k: number): number {
  let longestLength = 0;
  let start = 0;
  let maxCharCount = 0;
  const letterCount = {};
  for (let end = 0; end < string.length; end++){
    let charEnd = string[end];
    if (charEnd in letterCount) {
      letterCount[charEnd] += 1;
    }
    else {
      letterCount[charEnd] = 1;
    }
    maxCharCount = Math.max(maxCharCount, letterCount[charEnd]);
    if (end - start + 1 - maxCharCount > k) {
      let charStart = string[start];
      letterCount[charStart] -= 1;
      start++;
    }
    longestLength = Math.max(longestLength, end - start + 1);
  }
  return longestLength;
};

module.exports = longestSubstringReplace;