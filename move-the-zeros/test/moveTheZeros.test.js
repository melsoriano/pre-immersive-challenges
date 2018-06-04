const assert = require('assert');
const moveTheZeros = require('../moveTheZeros');

describe('Move The Zeros Test', () => {
  it('should return [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]', () => {
    const moveZeros = moveTheZeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true);
    assert.deepEqual(moveZeros, [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
  });
  it('should return [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]', () => {
    const moveZeros = moveTheZeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false);
    assert.deepEqual(moveZeros, [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
  });
  it('should return [8, 9, 4, 5, 0, 0, 0, 0]', () => {
    const moveZeros = moveTheZeros([8, 9, 0, 0, 0, 4, 5, 0], true);
    assert.deepEqual(moveZeros, [8, 9, 4, 5, 0, 0, 0, 0]);
  });
})