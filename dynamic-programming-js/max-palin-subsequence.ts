/**
 Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
 */

function maxPalinSub(string: string): number{
  const map = new Map<string, number>()

  function _maxPalinSub(string, i = 0, j = string.length - 1){
    let key = i + ',' + j;
    if (key in map) return map[key];

    if (i === j) return 1;
    if (i > j) return 0;

    if (string[i] === string[j]) {
      map[key] = 2 + _maxPalinSub(string, i + 1, j -1);
    }
    else {
     map[key] = Math.max(_maxPalinSub(string, i + 1, j),
      _maxPalinSub(string, i, j - 1))
    }

    return map[key];
  };

  return _maxPalinSub(string);
};

module.exports = maxPalinSub;