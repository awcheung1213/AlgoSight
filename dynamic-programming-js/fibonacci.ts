/* 
Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

The 0-th number of the sequence is 0.

The 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous two numbers.

Solve this recursively.
*/

//

function fibonacci (num: number): number {
  const map = new Map<number, number>()

  function findFibIndex (num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    if (map.has(num)) {
      return map.get(num)
    }

    const FibIndex = findFibIndex(num - 1) + findFibIndex(num - 2);

    map.set(num, FibIndex)

    return FibIndex
  }

  return findFibIndex(num)
}

module.exports = fibonacci;