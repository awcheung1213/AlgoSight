const sumPossible_test = require('../sum-possible')

describe('sum-possible test', () => {
  it('should return a boolean indicating whether or not the target amount can be summed with numbers in the list', () => {
    expect(sumPossible_test(8, [5, 12, 4])).toBe(true)
    expect(sumPossible_test(15, [6, 2, 10, 19])).toBe(false)
    expect(sumPossible_test(13, [6, 2, 1])).toBe(true)
    expect(sumPossible_test(103, [6, 20, 1])).toBe(true)
    expect(sumPossible_test(12, [])).toBe(false)
    expect(sumPossible_test(12, [12])).toBe(true)
    expect(sumPossible_test(0, [])).toBe(true)
    expect(sumPossible_test(271, [10, 8, 265, 24])).toBe(false)
    expect(sumPossible_test(2017, [4, 2, 10])).toBe(false)
    expect(sumPossible_test(13, [3, 5])).toBe(true)
  })
})