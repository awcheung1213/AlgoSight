function countSortedVowel(n: number): number {

  const vowels = ['a', 'e', 'i', 'o', 'u']

  let totalVowels = 0;

  function calcVowels(n: number, vowels: Array<string>): number{
    if (n === 0) return 0;

    let count = 0;
    for (let i = 0; i < vowels.length; i++) {
      count += 1 + calcVowels(n - 1, vowels.slice(i))
    }

    return count;
  }

  totalVowels += calcVowels(n, vowels);
  console.log(totalVowels)

  return totalVowels;
};

module.exports = countSortedVowel;

countSortedVowel(2)