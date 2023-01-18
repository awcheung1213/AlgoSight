/**
 Write a function, overlapSubsequence, that takes in two strings as arguments. The function should return the length of the longest overlapping subsequence.
 A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
 */

//

function overlapSubsequence(string1: string, string2: string): number{
  const map = new Map<string, number>();
  function _overlapSubsequence(string1: string, string2: string, firstStringIndex = 0, secondStringIndex = 0): number{
    let key = string1[firstStringIndex] + ',' + firstStringIndex + ',' + string2[secondStringIndex] + ',' + secondStringIndex;
    if (key in map) return map[key];
    if (string1[firstStringIndex] === undefined || string2[secondStringIndex] === undefined) return 0;
    if (string1[firstStringIndex] === string2[secondStringIndex]) {
       map[key] = 1 + _overlapSubsequence(string1, string2, firstStringIndex + 1, secondStringIndex + 1);
       return map[key];
    }
    else {
      map[key] = Math.max(
        _overlapSubsequence(string1, string2, firstStringIndex + 1, secondStringIndex),
        _overlapSubsequence(string1, string2, firstStringIndex, secondStringIndex + 1)
        );
      return map[key];
    }
  }
  return _overlapSubsequence(string1, string2);
};

module.exports = overlapSubsequence;