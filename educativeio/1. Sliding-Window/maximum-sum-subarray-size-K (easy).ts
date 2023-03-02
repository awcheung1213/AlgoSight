//init maxSum = 0
//init currSum = 0
//init a pointer = 0 that represents the starting index
//init a for loop with a pointer that represents the end index = 0
  //add value at index of end to currSum
  //if end >= k 
    //update maxSum
    //subtract val at index of start from currSum
    //SUBTRACT/MOVE START OF WINDOW AT THE END OF ITERATION***
    //increment start
//return maxSum

function max_sum_subarray(nums: Array<number>, k: number): number{
  let maxSum = 0;
  let windowSum = 0;
  let start = 0;
  for (let end = 0; end < nums.length; end++){
    windowSum += nums[end]; //add the next element
    //slide the window, we don't need to slide until we've hit the required window size of 'k'
    if (end >= k - 1){
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[start]; //subtract the element going out
      start++; //slide the window ahead
    }
  }
  return maxSum;
};

module.exports = max_sum_subarray;