/*
Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.

You may reuse a coin as many times as necessary.
*/

function countingChange(amount: number, coins: Array<number>): number{
  const map = new Map<string, number>();
  
  function _countingChange(amount, coins, index = 0){
    const key = amount + ',' + index;
    if (amount === 0) return 1;
    if (key in map) return map[key];

    const coin = coins[index];

    let total = 0;

    for (let quantity = 0; quantity * coin <= amount; quantity++ ){
      const remainder = amount - (quantity * coin)
       total += _countingChange(remainder, coins, index + 1)
    }
    map[key] = total;
    return total;
  }

  return _countingChange(amount, coins)
}

module.exports = countingChange;