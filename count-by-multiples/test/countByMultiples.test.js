const assert = require('assert');
const countByMultiples = require('../countByMultiples');

describe('Count By Multiples Test', () => {
  it('should return [100, 200, 300, 400, 500, 600, 700]', () => {
    const countBy = countByMultiples(7, 100);
    assert.deepEqual(countBy, [100, 200, 300, 400, 500, 600, 700]);
  });
  it('should return [8, 16, 24, 32, 40]', () => {
    const countBy = countByMultiples(5, 8);
    assert.deepEqual(countBy, [8, 16, 24, 32, 40]);
  });
  it('should return [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]', () => {
    const countBy = countByMultiples(10, 5);
    assert.deepEqual(countBy, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  });
})