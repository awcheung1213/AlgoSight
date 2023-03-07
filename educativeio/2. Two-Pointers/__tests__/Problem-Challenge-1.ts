const problemChallenge1_test = require('../Problem-Challenge-1');

describe('problemChallenge1_test', () => {
  it('should', () => {
    expect(problemChallenge1_test([4, 1, 2, -1, 1, -3], 1)).toEqual([[-3, -1 , 1, 4], [-3, 1, 1, 2]]);
  })
})