//find a permutation of the pattern
//init start = 0
//init permCount = {}
//init matches = 0
//populate permCount by counting up chars in pattern
//init for loop with end = 0
  //if char at end is in permCount
    //decrement char at end in permCount
    //if char at end in permCount === 0, increment matches
    //if matches === num of keys in permCount, return true
  //if window length > pattern length, shrink our window
    //if char at start is in permCount
      //if char at start in permCount === 0, decrement matches
      //decrement char at start in permCount
    //increment start
//return false
      

function problemChallenge1(string: string, pattern: string): boolean {
  let start = 0;
  let matches = 0;
  const permCount = {};
  for (let char of pattern) {
    if (char in permCount) {
      permCount[char] += 1;
    }
    else {
      permCount[char] = 1;
    }
  }
  for (let end = 0; end < string.length; end++) {
    let charEnd = string[end];
    if (charEnd in permCount) {
      permCount[charEnd] -= 1;
      if (permCount[charEnd] === 0) matches += 1;
      if (matches === Object.keys(permCount).length) return true;
    }
    if (end - start + 1 > pattern.length) {
      let charStart = string[start];
      if (charStart in permCount) {
        if (permCount[charStart] === 0) matches -= 1;
        permCount[charStart] -= 1;
      }
      start++;
    }
  }
  return false;
};

module.exports = problemChallenge1;