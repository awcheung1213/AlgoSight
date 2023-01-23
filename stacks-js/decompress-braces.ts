/*
Write a function, decompressBraces, that takes in a compressed string as an argument. The function should return the string decompressed.

The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.

You may assume that every number n is guaranteed to be an integer between 1 through 9.

You may assume that the input is valid and the decompressed string will only contain alphabetic characters.
*/

function decompressBraces(string: string): string {
  const stack: Array<number | string> = [];

  const values = {};
  for (let i = 1; i < 10; i++){
    values[i] = true;
  }

  for (let char of string){
    if (Number(char) in values){
      stack.push(Number(char));
    }
    else {
      if (char === "}"){
        //decompress
        let substring = "";
        while (typeof stack[stack.length - 1] !== 'number'){
          const popped = stack.pop();
          substring = popped + substring;
        }
        let num = stack.pop();
        stack.push(decompress(substring, num));
      }
      else if (char !== "{"){
        stack.push(char);
      }
    }
  }

  return stack.join('');
};

const decompress = <T>(substring: string, num: T): string => {
  let decompressedString = "";
  for (let i = 0; i < num; i++){
    decompressedString += substring;
  }
  return decompressedString;
}

//decompressBraces_test("2{q}3{tu}v")).toEqual('qqtututuv');

module.exports = decompressBraces;