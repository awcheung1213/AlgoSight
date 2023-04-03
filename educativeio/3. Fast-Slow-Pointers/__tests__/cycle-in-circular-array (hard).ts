const cycleCircularArray_test = require('../cycle-in-circular-array (hard)');


describe('cycleCircularArray_test', () => {
  test('should', () => {
    expect(cycleCircularArray_test([1, 2, -1, 2, 2])).toEqual(true);
    expect(cycleCircularArray_test([2, 2, -1, 2])).toEqual(true);
    expect(cycleCircularArray_test([2, 1, -1, -2])).toEqual(false);
  })
})
