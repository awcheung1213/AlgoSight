//find the smallest substring in the string which has all char of pattern
//init smallestSubstring = ""
//init start = 0
//init matches = 0
//init charCount = {}
//fill charCount with char counts of pattern
//init a for loop with end = 0
  //decrement char at end into charCount
  //update matches
//while matches === pattern length
  //update smallestSubstring
  //increment char at start from charCount
  //if char at start in charCount === 0, break
//return smallestSubstring

function problemChallenge3(string: string, pattern: string): string {
  let smallestSubstring: string = ""
  let start = 0;
  let matches = 0;
  const charCount = {};
  for (let char of pattern) {
    if (char in charCount) {
      charCount[char] += 1;
    }
    else {
      charCount[char] = 1;
    }
  }
  for (let end = 0; end < string.length; end++) {
    let charEnd = string[end];
    if (charEnd in charCount) charCount[charEnd] -= 1;
    if (charCount[charEnd] === 0) matches += 1;
    while (matches === Object.keys(charCount).length) {
      smallestSubstring = string.slice(start, end + 1);
      let charStart = string[start];
      if (charStart in charCount) charCount[charStart] += 1;
      if (charCount[charStart] > 0) matches -= 1;
      start++;
    }
  }
  return smallestSubstring;
};

module.exports = problemChallenge3;