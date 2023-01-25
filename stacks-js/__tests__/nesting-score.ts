const nestingScore_test = require('../nesting-score');

describe('nesting-score-test', () => {
  it('should return the score of the passed in string based on the provided rules', () => {
    expect(nestingScore_test("[]")).toEqual(1);
    expect(nestingScore_test("[][][]")).toEqual(3);
    expect(nestingScore_test("[[]]")).toEqual(2);
    expect(nestingScore_test("[[][]]")).toEqual(4);
    expect(nestingScore_test("[[][][]]")).toEqual(6);
    expect(nestingScore_test("[[][]][]")).toEqual(5);
    expect(nestingScore_test("[][[][]][[]]")).toEqual(7);
    expect(nestingScore_test("[[[[[[[][]]]]]]][]")).toEqual(129);
  });
});
