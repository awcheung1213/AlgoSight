const happyNumber_test = require('../happy-number');

describe('happyNumber_test', () => {
  test('should', () => {
    expect(happyNumber_test(23)).toEqual(true);
    expect(happyNumber_test(12)).toEqual(false);
  })
  })
