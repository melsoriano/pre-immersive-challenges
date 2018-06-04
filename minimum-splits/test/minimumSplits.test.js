const assert = require('assert');
const minimumSplits = require('../minimumSplits');

describe('Acceptable Sequence Test', () => {
  it('should return 24 for 5x5', () => {
    const minSplits = minimumSplits(5, 5);
    assert.deepEqual(minSplits, 24);
  });
  it('should return  19 for 10x2', () => {
    const minSplits = minimumSplits(10, 2);
    assert.deepEqual(minSplits, 19);
  });
  it('should return 0 for 1x1', () => {
    const minSplits = minimumSplits(1, 1);
    assert.deepEqual(minSplits, 0);
  });
})