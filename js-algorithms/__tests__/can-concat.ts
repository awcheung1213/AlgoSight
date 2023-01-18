const canConcat_test = require('../can-concat');

describe('can-concat-test', () => {
  it('should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string', () => {
    expect(canConcat_test("oneisnone", ["one", "none", "is"])).toBe(true);
    expect(canConcat_test("oneisnone", ["on", "e", "is"])).toBe(false);
    expect(canConcat_test("oneisnone", ["on", "e", "is", "n"])).toBe(true);
    expect(canConcat_test("foodisgood", ["is", "g", "ood", "f"])).toBe(true);
    expect(canConcat_test("santahat", ["santah", "hat"])).toBe(false);
    expect(canConcat_test("santahat", ["santah", "san", "hat", "tahat"])).toBe(true);
    expect(canConcat_test("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"])).toBe(false);
    expect(canConcat_test("fooisgood", ["foo", "is", "g", "ood", "f"])).toBe(true);
  });
});
