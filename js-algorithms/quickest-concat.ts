/**
Write a function, quickestConcat, that takes in a string and an array of words as arguments. The function should return the minimum number of words needed to build the string by concatenating words of the array.

You may use words of the array as many times as needed.

'caution', ['ca', 'ion', 'caut', 'ut'] ==> 2

iterate thru the array and recursively call passing in the string, array, currentConcat
if string === currentConcat return 1
if currentConcat.length > string.length return Infinity

*/



function quickestConcat(string: string, array: Array<string>): number{
  const map = new Map<string, number>()
  
  function _quickestConcat(string, array, concat = ""){
    if (concat in map) return map[concat];
    if (string === concat) return 0;
    if (concat.length > string.length) return Infinity;
    
    let minWords = Infinity;

    for (let el of array){
      const currentMin = 1 + _quickestConcat(string, array, concat + el);
      // console.log('el',el, 'concat', concat, 'min', currentMin)
      minWords = Math.min(minWords, currentMin)
    }
    map[concat] = minWords;
    return minWords === Infinity ? -1 : minWords;
  }

  return _quickestConcat(string, array);
};

module.exports = quickestConcat;

