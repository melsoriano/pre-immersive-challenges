const assert = require('assert');
const findUniqueNum = require('../findUniqueNum');

describe('Find Unique Number Test', () => {
  it('should return 2 for "1 3 6 7 9"', () => {
    const idxOfUniqueNum = findUniqueNum("1 3 6 7 9");
    assert.deepEqual(idxOfUniqueNum, 2);
  });
  it('should return 8 for "88 96 66 14 88 2 92 18 51 72 18"', () => {
    const idxOfUniqueNum = findUniqueNum('88 96 66 14 88 2 92 18 51 72 18');
    assert.deepEqual(idxOfUniqueNum, 8);
  });
})