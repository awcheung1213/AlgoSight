const sumToZero_test = require('../sum-to-zero (medium)');

describe('sumToZero_test', () => {
  it('should', () => {
    expect(sumToZero_test([-3, 0, 1, 2, -1, 1, -2])).toEqual([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0 , 1]]);
  })
})