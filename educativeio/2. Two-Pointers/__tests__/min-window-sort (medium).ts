const problemChallenge3_test = require('../min-window-sort (medium)');

describe('problemChallenge3_test', () => {
  it('should', () => {
    expect(problemChallenge3_test([1, 3, 2, 0, -1, 7, 10])).toEqual(5)
    expect(problemChallenge3_test([1, 2, 5, 3, 7, 10, 9, 12])).toEqual(5)
    expect(problemChallenge3_test([1, 2, 3])).toEqual(0)
    expect(problemChallenge3_test([3, 2, 1])).toEqual(3)
  })
})