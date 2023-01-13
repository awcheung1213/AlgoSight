const nonAdjacentSum_test = require('../non-adjacent-sum');

describe('non-adjacent-sum-test', () => {
  let nums: Array<number> = []
  it('should return the maximum sum of non-adjacent elements in the given array', () => {
    nums = [2, 4, 5, 12, 7]
    expect(nonAdjacentSum_test(nums)).toEqual(16)

    nums = [7, 5, 5, 12];
    expect(nonAdjacentSum_test(nums)).toEqual(19)

    nums = [7, 5, 5, 12, 17, 29];
    expect(nonAdjacentSum_test(nums)).toEqual(48)

    nums = [
      72, 62, 10,  6, 20, 19, 42,
      46, 24, 78, 30, 41, 75, 38,
      23, 28, 66, 55, 12, 17, 9,
      12, 3, 1, 19, 30, 50, 20
    ];
    expect(nonAdjacentSum_test(nums)).toEqual(488)
    
    nums = [
      72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
      30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
      83, 80, 56, 68,  6, 22, 56, 96, 77, 98,
      61, 20,  0, 76, 53, 74,  8, 22, 92, 37,
      30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
      72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
      42
    ];
    expect(nonAdjacentSum_test(nums)).toEqual(1465)
  })
})