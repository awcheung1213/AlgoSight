const printManagers_test = require('../print-manager-tree');

describe('print-manager-tree-test', () => {
  it('should print each manager and their direct reports', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    printManagers_test("1:max:4, 2:ann:0, 3:alb:2, 4:edmond:2, 5:bruce:0")
    expect(logSpy.mock.calls).toEqual([["ann"], ["-alb"], ["-edmond"], ["--max"], ["bruce"]])
  })
})