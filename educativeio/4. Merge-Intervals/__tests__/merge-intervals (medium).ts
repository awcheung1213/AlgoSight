const mergeIntervals_test = require('../merge-intervals (medium)');


describe('mergeIntervals_test', () => {
  test('should', () => {
    expect(mergeIntervals_test([[1,4], [2,5]], [7,9])).toEqual([[1,5], [7,9]]);
    expect(mergeIntervals_test([[6,7], [2,4]], [5,9])).toEqual([[2,4], [5,9]]);
    expect(mergeIntervals_test([[1,4], [2,6]], [3,5])).toEqual([[1,6]]);
  })
})
