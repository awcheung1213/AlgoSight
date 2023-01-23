const summingSquares_test = require('../summing-squares')

describe('summing-squares-test', () => {
  it('should return the minimum number of perfect squares needed to sum to the target number', () => {
    expect(summingSquares_test(8)).toEqual(2); 
    expect(summingSquares_test(9)).toEqual(1); 
    expect(summingSquares_test(12)).toEqual(3); 
    expect(summingSquares_test(1)).toEqual(1); 
    expect(summingSquares_test(31)).toEqual(4); 
    expect(summingSquares_test(50)).toEqual(2); 
    expect(summingSquares_test(68)).toEqual(2); 
    expect(summingSquares_test(87)).toEqual(4); 
  })
})