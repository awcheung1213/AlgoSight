//loop through the given array with two pointers, comparing their values. If 2nd num is < 1st num store the index of 1st at a, and 2nd at b. Return the array sliced at a & b
//init start, end
//init pointers a, b = 0, array.length - 1
//loop thru the array while a < b
  //if val at a > a + 1, start = a
  //if val at b - 1 > b, end = b
//return array sliced at start and end
//O(n) time complexity

function problemChallenge3(array: Array<number>): number {
  let start: number = -1,
    end: number = -1;
  let a = 0,
    b = array.length - 1;
  while (a < b) {
    if (start === -1 && array[a] > array[a + 1]) start = a;
    if (end === -1 && array[b - 1] > array[b]) end = b;
    a += 1;
    b -= 1;
  }
  const subarray = array.slice(start, end + 1);
  let min = Math.min(...subarray),
    max = Math.max(...subarray)
  let tempStart = start - 1;
  while (tempStart >= 0) {
    if (array[tempStart] > min) start = tempStart;
    tempStart -= 1;
  }
  let tempEnd = end === array.length - 1 ? end: end + 1;
  while (tempEnd < array.length) {
    if (array[tempEnd] < max) end = tempEnd;
    tempEnd += 1;
  }
  // const output = array.slice(start, end + 1);
  // return output
  return start == -1 ? 0 : end - start + 1;
}

module.exports = problemChallenge3;
