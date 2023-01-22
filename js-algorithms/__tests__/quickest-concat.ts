const quickestConcat_test = require('../quickest-concat');

describe('quickest-concat-test', () => {
  it('should return the minimum number of words needed to build the string by concatenating words in the array', () => {
    expect(quickestConcat_test('caution', ['ca', 'ion', 'caut', 'ut'])).toEqual(2);
    expect(quickestConcat_test('caution', ['ion', 'caut', 'caution'])).toEqual(1);
    expect(quickestConcat_test('respondorreact', ['re', 'or', 'spond', 'act', 'respond'])).toEqual(4);
    expect(quickestConcat_test('simchacindy', ['sim', 'simcha', 'acindy', 'ch'])).toEqual(3);
    expect(quickestConcat_test('simchacindy', ['sim', 'simcha', 'acindy'])).toEqual(-1);
    expect(quickestConcat_test('uuuuuu', ['u', 'uu', 'uuu', 'uuuu'])).toEqual(2);
    expect(quickestConcat_test('rongbetty', ['wrong', 'bet'])).toEqual(-1);
    expect(quickestConcat_test('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu'])).toEqual(7);
  });
});
