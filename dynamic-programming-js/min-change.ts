/**
 Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

If it is not possible to create the amount, then return -1.
 */

function minChange(amount: number, list: Array<number>): number{

  const map = new Map<number, number>()

  function numberOfCoins(amount, list){
    if (amount == 0) return 0;
    if (amount < 0) return Infinity;
    if (amount in map) return map[amount]

    let minCoin: number = Infinity;

    for (let coin of list){
      minCoin = Math.min(minCoin, 1 + numberOfCoins(amount - coin, list))
    }

    map[amount] = minCoin

    return minCoin;
  }

  return numberOfCoins(amount, list) === Infinity ? -1 : numberOfCoins(amount,list)
}

module.exports = minChange;