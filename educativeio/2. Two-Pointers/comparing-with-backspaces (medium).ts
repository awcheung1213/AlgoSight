//use pointers starting at the end of each string, skip '#' and apply a backspace, if at any point chars at pointers dont match  return false
//init two pointers starting at the end of each string
//define helper func to id next valid char of a string
//while any pointer is >= 0
  //get next valid char of string1 & string2
  //if next valid of string1 & string2 < 0 it means both strings are empty, return true
  //if next valid of string1 || string2 < 0 it means only one string is empty, return false
  //if pointer chars dont match, return false
  //decrement pointer indices
//return true

  function problemChallenge2(string1: string, string2: string): boolean {
    let pointer1 = string1.length - 1,
    pointer2 = string2.length - 1
    
    function nextValidChar(string: string, index: number): number {
      let backspaceCount = 0;
      while (index >= 0) {
        if (string[index] === '#') {
          backspaceCount += 1;
        }
        else if (backspaceCount > 0) {
          backspaceCount -= 1;
        }
        else break;
        index -=1;
      }
      return index;
    }

    while (pointer1 >= 0 || pointer2 >= 0) {
      let pointer1Valid = nextValidChar(string1, pointer1),
      pointer2Valid = nextValidChar(string2, pointer2)
      if (pointer1Valid < 0 && pointer2Valid < 0) return true;
      if (pointer1Valid < 0 || pointer2Valid < 0) return false;
      if (string1[pointer1Valid] != string2[pointer2Valid]) return false;
      pointer1 = pointer1Valid -= 1;
      pointer2 = pointer2Valid -= 1;
    }
    return true;
  }
  
  module.exports = problemChallenge2;