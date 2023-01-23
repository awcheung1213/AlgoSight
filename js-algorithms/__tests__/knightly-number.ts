const knightlyNumber_test = require('../knightly-number');

describe('knightly-number-test', () => {
  it('should return the total number of ways the knight can move to a specific coordinate in \'m\' moves', () => {
    expect(knightlyNumber_test(8, 2, 4, 4, 5, 5)).toEqual(2);
    expect(knightlyNumber_test(8, 2, 7, 1, 7, 1)).toEqual(3);
    expect(knightlyNumber_test(8, 2, 5, 4, 5, 4)).toEqual(8);
    expect(knightlyNumber_test(8, 3, 5, 2, 4, 4)).toEqual(21);
    expect(knightlyNumber_test(20, 6, 18, 7, 10, 15)).toEqual(60);
    expect(knightlyNumber_test(20, 12, 8, 3, 9, 14)).toEqual(98410127);
    expect(knightlyNumber_test(8, 2, 0, 0, 1, 1)).toEqual(0);
  });
});
