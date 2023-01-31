const permutations_test = require('../permutations');

describe('permutations-test', () => {
  it('should return a 2D array where each subarray represents one of the possible permutations of the array', () => {
    expect(permutations_test(['a', 'b', 'c'])).toEqual([ 
      [ 'a', 'b', 'c' ], 
      [ 'b', 'a', 'c' ], 
      [ 'b', 'c', 'a' ], 
      [ 'a', 'c', 'b' ], 
      [ 'c', 'a', 'b' ], 
      [ 'c', 'b', 'a' ] 
    ] )
    expect(permutations_test(['red', 'blue'])).toEqual([ 
      [ 'red', 'blue' ], 
      [ 'blue', 'red' ] 
    ])
    expect(permutations_test([8, 2, 1, 4])).toEqual([ 
      [ 8, 2, 1, 4 ], [ 2, 8, 1, 4 ], 
      [ 2, 1, 8, 4 ], [ 2, 1, 4, 8 ], 
      [ 8, 1, 2, 4 ], [ 1, 8, 2, 4 ], 
      [ 1, 2, 8, 4 ], [ 1, 2, 4, 8 ], 
      [ 8, 1, 4, 2 ], [ 1, 8, 4, 2 ], 
      [ 1, 4, 8, 2 ], [ 1, 4, 2, 8 ], 
      [ 8, 2, 4, 1 ], [ 2, 8, 4, 1 ], 
      [ 2, 4, 8, 1 ], [ 2, 4, 1, 8 ], 
      [ 8, 4, 2, 1 ], [ 4, 8, 2, 1 ], 
      [ 4, 2, 8, 1 ], [ 4, 2, 1, 8 ], 
      [ 8, 4, 1, 2 ], [ 4, 8, 1, 2 ], 
      [ 4, 1, 8, 2 ], [ 4, 1, 2, 8 ] 
    ] )
    expect(permutations_test([])).toEqual([
      []
     ])
  })
})
