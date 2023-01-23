const decompressBraces_test = require('../decompress-braces');

describe('decompress-braces-test', () => {
  it('should return a decompressed version of the inputted string', () => {
    expect(decompressBraces_test("2{q}3{tu}v")).toEqual('qqtututuv');
    expect(decompressBraces_test("ch3{ao}")).toEqual('chaoaoao');
    expect(decompressBraces_test("2{y3{o}}s")).toEqual('yoooyooos');
    expect(decompressBraces_test("z3{a2{xy}b}")).toEqual('zaxyxybaxyxybaxyxyb');
    expect(decompressBraces_test("2{3{r4{e}r}io}")).toEqual('reeeerreeeerreeeerioreeeerreeeerreeeerio');
    expect(decompressBraces_test("go3{spinn2{ing}s}")).toEqual('gospinningingsspinningingsspinningings');
    expect(decompressBraces_test("2{l2{if}azu}l")).toEqual('lififazulififazul');
    expect(decompressBraces_test("3{al4{ec}2{icia}}")).toEqual('alececececiciaiciaalececececiciaiciaalececececiciaicia');
  });
});