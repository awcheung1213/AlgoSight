const countingChange_test = require('../counting-change')

describe('counting-change-test', () => {
  it('should return the different amount of ways to sum up the target amount with the provided array of coins', () => {
    expect(countingChange_test(4, [1, 2, 3])).toEqual(4); 
    expect(countingChange_test(8, [1, 2, 3])).toEqual(10); 
    expect(countingChange_test(24, [5, 7, 3])).toEqual(5); 
    expect(countingChange_test(13, [2, 6, 12, 10])).toEqual(0); 
    expect(countingChange_test(512, [1, 5, 10, 25])).toEqual(20119); 
    expect(countingChange_test(1000, [1, 5, 10, 25])).toEqual(142511); 
    expect(countingChange_test(240, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(1525987916); 
  })
})
