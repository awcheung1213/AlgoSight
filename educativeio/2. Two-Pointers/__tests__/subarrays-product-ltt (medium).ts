const subarraysProductLTT_test = require('../subarrays-product-ltt (medium)');

describe('subarraysProductLTT_test', () => {
  it('should', () => {
    expect(subarraysProductLTT_test([8, 2, 6, 5], 50)).toEqual([[8], [2], [8, 2], [6], [2, 6], [5], [6, 5]]);
  })
})