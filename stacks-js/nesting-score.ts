/*
Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:

[] is worth 1 point
XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
[S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
You may assume that the input only contains well-formed square brackets.
*/

//use a stack to track brackets
//iterate through the string
//if "[" add to the stack
//if "]" check if the top of the stack is "["
  //if true add 1 to sum
  //else pop until we hit "[" and multiply the sum of those values by 2 and add to sum
//return sum
function nestingScore(string: string): number {
  const stack: Array<string | number> = [];
  let sum = 0;

  for (let char of string){
    if (char === "[") {
      stack.push(char);
    }
    else {
      if (stack[stack.length - 1] === "["){
        stack.pop();
        stack.push(1);
      }
      else {
        let subSum = 0;
        while (stack[stack.length - 1] !== "[") {
          let popped = stack.pop();
          subSum += 2 * Number(popped);
        }
        stack.pop();
        stack.push(subSum)
      }
    }
  }
  
  stack.forEach(num => {
    sum += Number(num)
  })

  return sum;
};

module.exports = nestingScore;