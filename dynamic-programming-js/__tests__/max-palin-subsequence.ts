const maxPalinSub_test = require('../max-palin-subsequence')

describe('max-palin-subsequence test', () => {
  it('should return the max length of the subsequence of the string that is also a palindrome', () => {
    expect(maxPalinSub_test("luwxult")).toEqual(5); 
    expect(maxPalinSub_test("xyzaxxzy")).toEqual(6); 
    expect(maxPalinSub_test("lol")).toEqual(3);
    expect(maxPalinSub_test("boabcdefop")).toEqual(3); 
    expect(maxPalinSub_test("z")).toEqual(1); 
    expect(maxPalinSub_test("chartreusepugvicefree")).toEqual(7); 
    expect(maxPalinSub_test("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty")).toEqual(15); 
    expect(maxPalinSub_test("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe")).toEqual(31); 
  })
})
