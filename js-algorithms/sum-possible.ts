/*
Write a function sum_possible that takes in an amount and a list of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the list. You may reuse numbers of the list as many times as necessary.

You may assume that the target amount is non-negative.
*/

function sumPossible(amount: number, list: Array<number>): boolean{
  const map = new Map<number,boolean>()

  function _sumPossible(amount, list){
    if (amount === 0) return true;
    if (amount < 0) return false;
    if (amount in map) return map[amount];

    for (let number of list){
      if (_sumPossible(amount - number, list)){
        map[amount] = true
        return true
      }
    }

    map[amount] = false;
    return false
  }

  return _sumPossible(amount,list);
}

module.exports = sumPossible;
