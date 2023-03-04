//init longestLength = 0
//init start = 0
//init an object to store distinct chars
//init a for loop with end = 0
  //add the char at end to object
  //while the number of keys of our object > k
    //update longestLength
    //subtract char at start from object
    //increment start
//return longestLength

function longest_substring_distinct(string: string, k: number): number {
  let longestLength = 0;
  let start = 0
  const characterCount = {}; //store distinct chars in an object
  for (let end = 0; end < string.length; end++) {
    let char = string[end]; //extend our window
    if (char in characterCount) {
      characterCount[char] += 1; //add a distinct char into our object
    }
    else {
      characterCount[char] = 1;
    }
    //shrink our window, until we are left with < k distinct chars
    while (Object.keys(characterCount).length > k) {
      let charStart = string[start];
      characterCount[charStart] -= 1;
      if (characterCount[charStart] === 0) delete characterCount[charStart];
      start++; //shrink our window
    }
    longestLength = Math.max(longestLength, end - start + 1);
  }
  return longestLength;
};

module.exports = longest_substring_distinct;