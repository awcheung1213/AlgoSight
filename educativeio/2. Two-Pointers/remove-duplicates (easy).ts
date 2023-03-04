//find the length of array after removing duplicates in place
//use two pointers
//first pointer stores index of the next non-duplicate number
//second pointer is used to check if the next number is a duplicate, iterates automatically
//move first pointer if we encounter non-duplicates, else stay put

//init nextNonDuplicate = 1
//init for loop with end = 1
  //if end != value at nextNonDuplicate - 1
    //update array at index of nextNonDuplicate
    //increment nextNonDuplicate
//return nextNonDuplicate + 1

function removeDuplicates(array: Array<number>): number {
  let nextNonDuplicate = 1;
  for (let end = 1; end < array.length; end++) {
    let endValue = array[end];
    let lastNonDuplicate = array[nextNonDuplicate - 1];
    if (endValue != lastNonDuplicate) {
      array[nextNonDuplicate] = endValue;
      nextNonDuplicate += 1;
    }
  }
  return nextNonDuplicate;
};

module.exports = removeDuplicates;