const  fibonacci_test = require('../fibonacci')

describe('fibonacci-test', () => {
  it('The 0-th number of the sequence is 0.', () => {
    expect(fibonacci_test(0)).toEqual(0)
  });

  it('The 1-st number of the sequence is 1.', () => {
    expect(fibonacci_test(1)).toEqual(1)
  });

  it('The 2-nd number of the sequence is 1.', () => {
    expect(fibonacci_test(2)).toEqual(1)
  });

  it('The 3-rd number of the sequence is 2.', () => {
    expect(fibonacci_test(3)).toEqual(2)
  });

  it('The 4-th number of the sequence is 3.', () => {
    expect(fibonacci_test(4)).toEqual(3)
  });

  it('The 5-th number of the sequence is 5.', () => {
    expect(fibonacci_test(5)).toEqual(5)
  });

  it('The 35-th number of the sequence is 9227465.', () => {
    expect(fibonacci_test(35)).toEqual(9227465)
  });
  
  it('The 46-th number of the sequence is 1836311903.', () => {
    expect(fibonacci_test(46)).toEqual(1836311903)
  });
})
