const countPaths_test = require('../count-paths')

describe('countPaths-test', () => {
  let grid: Array<Array<string>>= [];
  it('should return the number of ways possible to travel from top-left corner of the grid to the bottom-right corner', () => {
    grid = [
      ["O", "O"],
      ["O", "O"],
    ];
    expect(countPaths_test(grid)).toEqual(2);

    grid = [
      ["O", "O", "X"],
      ["O", "O", "O"],
      ["O", "O", "O"],
    ];
    expect(countPaths_test(grid)).toEqual(5);

    grid = [
      ["O", "O", "O"],
      ["O", "O", "X"],
      ["O", "O", "O"],
    ];
    expect(countPaths_test(grid)).toEqual(3);

    grid = [
      ["O", "O", "O"],
      ["O", "X", "X"],
      ["O", "O", "O"],
    ];
    expect(countPaths_test(grid)).toEqual(1);

    grid = [
      ["O", "O", "X", "O", "O", "O"],
      ["O", "O", "X", "O", "O", "O"],
      ["X", "O", "X", "O", "O", "O"],
      ["X", "X", "X", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O"],
    ];
    expect(countPaths_test(grid)).toEqual(0);

    grid = [
      ["O", "O", "X", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "X"],
      ["X", "O", "O", "O", "O", "O"],
      ["X", "X", "X", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O"],
    ];
    expect(countPaths_test(grid)).toEqual(42);
    
    grid = [
      ["O", "O", "X", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "X"],
      ["X", "O", "O", "O", "O", "O"],
      ["X", "X", "X", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "X"],
    ];
    expect(countPaths_test(grid)).toEqual(0);

    grid = [
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ];
    expect(countPaths_test(grid)).toEqual(40116600);

    grid = [
      ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
      ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
      ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
      ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
    ];
    expect(countPaths_test(grid)).toEqual(3190434);

  })
})