/**
Write a function, quickestConcat, that takes in a string and an array of words as arguments. The function should return the minimum number of words needed to build the string by concatenating words of the array.

You may use words of the array as many times as needed.

'caution', ['ca', 'ion', 'caut', 'ut'] ==> 2

iterate thru the array and recursively call passing in the string, array, currentConcat
if string === currentConcat return 1
if currentConcat.length > string.length return Infinity

*/



function quickestConcat(string: string, array: Array<string>): number{

  function _quickestConcat(string, array, concat = "", memo = {}){
    if (concat in memo) return memo[concat];
    if (concat === string) return 0;
    if (concat.length > string.length) return Infinity;

    let min = Infinity;

    for (let substring of array){
      let attempt = 1 + _quickestConcat(string, array, concat + substring, memo);
      min = Math.min(min, attempt)
    }

    memo[concat] = min;
    return memo[concat];
  }

  let minWords = _quickestConcat(string, array);

  return minWords == Infinity ? -1 : minWords;
};

module.exports = quickestConcat;

