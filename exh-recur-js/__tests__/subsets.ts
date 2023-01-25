const subsets_test = require('../subsets');

describe('subsets-test', () => {
  it('should return an array with all possible subsets of the passed in array', () => {
    expect(subsets_test(['a', 'b'])).toEqual([ 
      [], 
      [ 'b' ], 
      [ 'a' ], 
      [ 'a', 'b' ] 
    ]);
    expect(subsets_test(['a', 'b', 'c'])).toEqual([
      [],
      [ 'c' ],
      [ 'b' ],
      [ 'b', 'c' ],
      [ 'a' ],
      [ 'a', 'c' ],
      [ 'a', 'b' ],
      [ 'a', 'b', 'c' ]
    ]);
    expect(subsets_test(['x'])).toEqual([ 
      [], 
      [ 'x' ] 
    ]);
    expect(subsets_test([])).toEqual([ 
      []
    ]);
    expect(subsets_test(['q', 'r', 's', 't'])).toEqual([ 
      [
        [],
        [ 't' ],
        [ 's' ],
        [ 's', 't' ],
        [ 'r' ],
        [ 'r', 't' ],
        [ 'r', 's' ],
        [ 'r', 's', 't' ],
        [ 'q' ],
        [ 'q', 't' ],
        [ 'q', 's' ],
        [ 'q', 's', 't' ],
        [ 'q', 'r' ],
        [ 'q', 'r', 't' ],
        [ 'q', 'r', 's' ],
        [ 'q', 'r', 's', 't' ]
      ]
    ]);
  })
})


