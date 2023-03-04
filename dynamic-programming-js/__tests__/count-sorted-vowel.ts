const countSortedVowel_test = require('../count-sorted-vowel');

describe('count-sorted-vowel-test', () => {
  it('should return the number of strings of length n that consist only of vowels and are lexicographically sorted', () => {
    expect(countSortedVowel_test(1)).toEqual(5);
    expect(countSortedVowel_test(2)).toEqual(15);
    expect(countSortedVowel_test(33)).toEqual(66045);
  });
});