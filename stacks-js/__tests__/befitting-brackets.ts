const befittingBrackets_test = require('../befitting-brackets');

describe('befitting-brackets-test', () => {
  it('should return a boolean indicating if the string contains correctly matched brackets', () => {
    expect(befittingBrackets_test('(){}[](())')).toBe(true);
    expect(befittingBrackets_test('({[]})')).toBe(true);
    expect(befittingBrackets_test('[][}')).toBe(false);
    expect(befittingBrackets_test('{[]}({}')).toBe(false);
    expect(befittingBrackets_test('[]{}(}[]')).toBe(false);
    expect(befittingBrackets_test('[]{}()[]')).toBe(true);
    expect(befittingBrackets_test(']{}')).toBe(false);
    expect(befittingBrackets_test('')).toBe(true);
    expect(befittingBrackets_test('{[(}])')).toBe(false);
  });
});
