const arrayStepper_test = require('../array-stepper');

describe('array-stepper-test', () => {
  it('should return a boolean indicating if it is possible to reach the last position of the array', () => {
    expect(arrayStepper_test([2, 4, 2, 0, 0, 1])).toBe(true);
    expect(arrayStepper_test([2, 3, 2, 0, 0, 1])).toBe(false);
    expect(arrayStepper_test([3, 1, 3, 1, 0, 1])).toBe(true); 
    expect(arrayStepper_test([4, 1, 5, 1, 1, 1, 0, 4])).toBe(true); 
    expect(arrayStepper_test([4, 1, 2, 1, 1, 1, 0, 4])).toBe(false); 
    expect(arrayStepper_test([1, 1, 1, 1, 1, 0])).toBe(true); 
    expect(arrayStepper_test([1, 1, 1, 1, 0, 0])).toBe(false); 
    expect(arrayStepper_test([ 
      31, 30, 29, 28, 27,
      26, 25, 24, 23, 22,
      21, 20, 19, 18, 17,
      16, 15, 14, 13, 12,
      11, 10, 9, 8, 7, 6,
      5, 3, 2, 1, 0, 0, 0
    ])).toBe(false); 
    
  })
})

