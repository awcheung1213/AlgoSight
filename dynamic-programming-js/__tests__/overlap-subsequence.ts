const overlapSubsequence_test = require('../overlap-subsequence');

describe('overlap-subsequence-test', () => {
  it('should return the length of the longest overlapping subsequence between two provided strings', () => {
    expect(overlapSubsequence_test("dogs", "daogt")).toEqual(3);
    expect(overlapSubsequence_test("xcyats", "criaotsi")).toEqual(4);
    expect(overlapSubsequence_test("xfeqortsver", "feeeuavoeqr")).toEqual(5);
    expect(overlapSubsequence_test("kinfolklivemustache", "bespokekinfolksnackwave")).toEqual(11);
    expect(overlapSubsequence_test("mumblecorebeardleggingsauthenticunicorn",
    "succulentspughumblemeditationlocavore")).toEqual(15);

  });
});