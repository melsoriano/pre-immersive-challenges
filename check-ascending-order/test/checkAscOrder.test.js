const assert = require('assert');
const checkAscOrder = require('../checkAscOrder');

describe('Check Ascending Order Test', () => {
  it('should return true for [1, 2, 3, 4, 5]', () => {
    const isAscending = checkAscOrder([1, 2, 3, 4, 5]);
    assert.deepEqual(isAscending, true);
  });
  it('should return true for [11, 45, 67, 88]', () => {
    const isAscending = checkAscOrder([11, 45, 67, 88]);
    assert.deepEqual(isAscending, true);
  });
  it('should return false for [5, 4, 3, 2, 1]', () => {
    const isAscending = checkAscOrder([5, 4, 3, 2, 1]);
    assert.deepEqual(isAscending, false);
  });
  it('should return false for [1, 0, 3]', () => {
    const isAscending = checkAscOrder([1, 0, 3]);
    assert.deepEqual(isAscending, false);
  });
})