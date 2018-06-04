const assert = require('assert');
const findMidVal = require('../findMiddleValue');

describe('Find The Middle Value Test', () => {
  it('should return 2 for [3, 8, 5]', () => {
    const getIdxOfMidVal = findMidVal([3, 8, 5]);
    assert.deepEqual(getIdxOfMidVal, 2);
  });
  it('should return 0 for [99, 175, 49]', () => {
    const getIdxOfMidVal = findMidVal([99, 175, 49]);
    assert.deepEqual(getIdxOfMidVal, 0);
  });
})