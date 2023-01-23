/**
 Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }


 */

function befittingBrackets(string: string, stack: Array<string> = []): boolean {
  if (string.length === 0 && stack.length === 0) return true;
  if (string.length === 0 && stack.length != 0) return false;

  const currChar = string[0];
  const stackTop = stack[stack.length - 1];

  if (currChar === "(") {
    stack.push(currChar);
  }
  else if (currChar === ")") {
    if (stackTop === "(") {
      stack.pop();
    }
    else {
      stack.push(currChar);
    }
  }

  if (currChar === "[") {
    stack.push(currChar);
  }
  else if (currChar === "]") {
    if (stackTop === "[") {
      stack.pop();
    }
    else {
      stack.push(currChar);
    }
  }

  if (currChar === "{") {
    stack.push(currChar);
  }
  else if (currChar === "}") {
    if (stackTop === "{") {
      stack.pop();
    }
    else {
      stack.push(currChar);
    }
  }

  return befittingBrackets(string.slice(1), stack);
};

module.exports = befittingBrackets;