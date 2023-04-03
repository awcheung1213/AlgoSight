//init output = []
//init start = 0
//init charCount = {}
//init matches = 0
//fill charCount with chars in pattern as keys and occurrences as values
//init for loop with end = 0
//if char at end in charCount
  //decrement charCount 
  //if char at end in charCount === 0, increment matches
  //if matches === num of keys in charCount, add start to output
//if window length > pattern length, shrink window
  //if char at start in charCount
    //if char at start in charCount === 0, decrement matches
    //increment char at start in charCount
  //start++

//create an object representing the chars and their occurences in the pattern
//extend a window through the string checking if the window contains a permutation
//add the starting index of the window if it contains a permutation
//if the window size exceeds the pattern length shrink the window
//return an array of starting indices

function problemChallenge2(string: string, pattern: string): Array<number> {
  // const output: Array<number> = [];
  // let start = 0;
  // let matches = 0;
  // const charCount = {};
  // for (let char of pattern) {
  //   if (char in charCount) {
  //     charCount[char] += 1;
  //   }
  //   else {
  //     charCount[char] = 1;
  //   }
  // }
  // for (let end = 0; end < string.length; end++) {
  //   let charEnd = string[end];
  //   if (charEnd in charCount) {
  //     charCount[charEnd] -= 1;
  //     if (charCount[charEnd] === 0) matches += 1;
  //   }
  //   if (end - start + 1 > pattern.length) {
  //     let charStart = string[start];
  //     if (charStart in charCount) {
  //       if (charCount[charStart] === 0) matches -= 1;
  //       charCount[charStart] += 1;
  //     }
  //     start++;
  //   }
  //   if (matches === Object.keys(charCount).length) output.push(start);
  // }
  // return output;

  const result: Array<number> = []
  const charCount = {};
  for (let char of pattern) {
    if (char in charCount) {
      charCount[char] += 1;
    }
    else {
      charCount[char] = 1;
    }
  };
  let matches = 0;
  let start = 0;
  for (let end = 0; end < string.length; end++) {
    let endChar = string[end];
    if (endChar in charCount) {
      charCount[endChar] -= 1;
      if (charCount[endChar] === 0) matches += 1;
    }
    while (end - start + 1 > pattern.length) {
      let startChar = string[start];
      if (startChar in charCount) {
        if (charCount[startChar] === 0) matches -= 1;
        charCount[startChar] += 1;
      }
      start += 1;
    }
    if (matches === Object.keys(pattern).length) result.push(start);
  }
  return result;
};

module.exports = problemChallenge2;