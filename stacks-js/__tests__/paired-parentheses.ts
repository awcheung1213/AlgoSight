const pairedParentheses_test = require('../paired-parentheses');

describe('paired-parentheses-test', () => {
  it('should return a boolean indicating whether or not the string has well-formed parentheses', () => {
    expect(pairedParentheses_test("(david)((abby))")).toBe(true);
    expect(pairedParentheses_test("()rose(jeff")).toBe(false);
    expect(pairedParentheses_test(")(")).toBe(false);
    expect(pairedParentheses_test("()")).toBe(true);
    expect(pairedParentheses_test("(((potato())))")).toBe(true);
    expect(pairedParentheses_test("(())(water)()")).toBe(true);
    expect(pairedParentheses_test("(())(water()()")).toBe(false);
    expect(pairedParentheses_test("")).toBe(true);
    expect(pairedParentheses_test("))()")).toBe(false);
  });
});
