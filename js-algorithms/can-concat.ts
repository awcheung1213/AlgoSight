/*
Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.

You may reuse words of the array as many times as needed.
*/

//"oneisnone", ["one", "none", "is"]
//iterate through each string in the array and recursively call passing in a concat string that travels thru the recursion
//if concat === string return true
//if concat.length > string.length return false

function canConcat(string: string, array: Array<string>): boolean {
  const map = new Map<string, boolean>();
  function _canConcat(string: string, array: Array<string>, concat = ""): boolean {
    const key = concat;

    if (key in map) return map[key]
    if (concat === string) return true;
    if (concat.length > string.length) return false;

    for (let el of array){
      if (_canConcat(string, array, concat + el) === true) {
        map[key] = true;
        return true;
      }
    }

    map[key] = false;
    return false;
  };

  return _canConcat(string, array);
};

module.exports = canConcat;