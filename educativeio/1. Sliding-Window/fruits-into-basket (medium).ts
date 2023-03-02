//init maxFruits = 0
//init start
//init object to store distinct fruits
//init for loop with end = 0
  //add value at end to object
  //when number of distinct key in object > 2
    //update maxFruits
    //remove val at start from object
    //increment start
//return maxFruits

function fruits_into_basket(array: Array<string>): number {
  let maxFruits = 0;
  let start = 0;
  const distinctFruits = {}; 
  for (let end = 0; end < array.length; end++) {
    let char = array[end]; //extend window
    //add the char to the distinctFruits object
    if (char in distinctFruits) {
      distinctFruits[char] += 1;
    }
    else {
      distinctFruits[char] = 1;
    }
    //shrink the window when we exceed the allowed max distinct chars (2)
    while (Object.keys(distinctFruits).length > 2) {
      let charStart = array[start];
      distinctFruits[charStart] -= 1;
      if (distinctFruits[charStart] === 0) delete distinctFruits[charStart];
      start++;
    }
    maxFruits = Math.max(maxFruits, end - start + 1); //update maxFruits 
  }
  return maxFruits;
};

module.exports = fruits_into_basket;