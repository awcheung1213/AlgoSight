const dutchNationalFlag_test = require('../dutch-national-flag (medium)');

describe('dutchNationalFlag_test', () => {
  it('should', () => {
    expect(dutchNationalFlag_test([2, 2, 0, 1, 2, 0])).toEqual([0, 0, 1, 2, 2, 2]);
  })
})