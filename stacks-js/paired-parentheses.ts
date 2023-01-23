/*
Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.
*/

function pairedParentheses(string: string, stack: Array<string> = []): boolean {
  if (string.length === 0 && stack.length === 0) return true;
  if (string.length === 0 && stack.length != 0) return false;

  if (string[0] === "(") stack.push(string[0]);
  if (string[0] === ")"){
    if (stack[stack.length - 1] === "(") {
      stack.pop();
    }
    else {
      stack.push(string[0])
    }
  }

  return pairedParentheses(string.slice(1), stack);
}

console.log(pairedParentheses("(david)((abby))"))
module.exports = pairedParentheses;