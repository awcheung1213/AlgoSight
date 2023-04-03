//build a linked list (sum of square of each digit). If the cyclic number is 1 return true

//init slow and fast pointers = number
//while true
  //move the pointers by summing the square of each digit
  //if slow === fast, break
//return slow === 1

// class Node<T>{ 
//   value: T
//   next: Node<T> | null
//   constructor(value: T, next = null ){
//     this.value = value,
//     this.next = next
//   }
// }

function happyNumber(number: number): boolean {
  let slow = number,
    fast = number
  while (true) {
    slow = calcSquare(slow);
    fast = calcSquare(calcSquare(fast));
    if (slow === fast) break;
  }
  return slow === 1;
}

function calcSquare(number): number {
  let sum = 0;
  while (number > 0) {
    let digit = number % 10;
    sum += digit * digit;
    number = Math.floor(number / 10);
  }
  return sum;
}
      
module.exports = happyNumber;
      