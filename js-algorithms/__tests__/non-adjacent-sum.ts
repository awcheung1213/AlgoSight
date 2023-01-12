const nonAdjacentSum_test = require('../non-adjacent-sum');

describe('non-adjacent-sum-test', () => {
  let nums: Array<number> = []
  it('should return the maximum sum of non-adjacent elements in the given array', () => {
    nums = [2, 4, 5, 12, 7]
    expect(nonAdjacentSum_test(nums)).toEqual(16)
  })
})