const assert = require('assert');
const descendingOrder = require('../descendingOrder');

describe('Descending Order Test', () => {
  it('should return 888554430 for 538048854', () => {
    const rearrangeOrder = descendingOrder(538048854);
    assert.deepEqual(rearrangeOrder, 888554430);
  });
  it('should return 9876543210 for 1092837465', () => {
    const rearrangeOrder = descendingOrder(1092837465);
    assert.deepEqual(rearrangeOrder, 9876543210);
  });
  it('should return "not a number!" for "2468"', () => {
    const rearrangeOrder = descendingOrder("2468");
    assert.deepEqual(rearrangeOrder, 'not a number!');
  });
})