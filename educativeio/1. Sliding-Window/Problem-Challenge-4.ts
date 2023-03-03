//init output = []
//init start = 0
//init matches = 0
//init wordCount = {}
//fill wordCount with words in words
//init a for loop with end = 0
  //extend window by words[0].length
  //add substring in window to wordCount if in wordCount
  //if substring in wordCount === 1, increment matches
  //if matches === words.length, push start into output
  //if char at start in wordCount > 1, shrink window
  //decrement char at start in wordCount
//return output

function problemChallenge4(string: string, words: Array<string>): Array<number> {
  const output: Array<number> = [];
  let start = 0;
  let matches = 0;
  const wordCount = {};
  for (let word of words) {
    wordCount[word] = 0;
  }
  for (let end = words[0].length - 1; end < string.length; end += words[0].length) {
    let substring = string.slice(end - 2, end + 1)
    if (substring in wordCount) {
      wordCount[substring] += 1;
      if (wordCount[substring] === 1) matches += 1;
    }
    while (wordCount[substring] > 1) {
      let substringStart = string.slice(start, words[0].length)
      if (substringStart in wordCount) {
        wordCount[substringStart] -= 1;
      }
      start += words[0].length;
    }
    if (matches === words.length) output.push(start);
  }
  return output;
};

module.exports = problemChallenge4;