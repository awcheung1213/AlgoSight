const fruits_into_basket_test = require('../fruits-into-basket (medium)');

describe('fruits_into_basket_test', () => {
  it('should', () => {
    expect(fruits_into_basket_test(['a', 'b', 'c', 'a', 'c'])).toEqual(3)
  })
})