const minChange_test = require('../min-change')

describe('min-change test', () => {
  it('should return a number indicating the minimum number of coins needed to sum up the amount', () => {
    expect(minChange_test(8, [1, 5, 4, 12])).toEqual(2);
    expect(minChange_test(13, [1, 9, 5, 14, 30])).toEqual(5);
    expect(minChange_test(23, [2, 5, 7])).toEqual(4);
    expect(minChange_test(102, [1, 5, 10, 25])).toEqual(6);
    expect(minChange_test(200, [1, 5, 10, 25])).toEqual(8);
    expect(minChange_test(0, [4, 2, 10])).toEqual(0);
    expect(minChange_test(0, [])).toEqual(0);
  })

  it('should return -1 if the amount cannot be reached with the provided list of coins', () => {
    expect(minChange_test(2017, [4, 2, 10])).toEqual(-1);
    expect(minChange_test(271, [10, 8, 265, 24])).toEqual(-1);
  })
})
