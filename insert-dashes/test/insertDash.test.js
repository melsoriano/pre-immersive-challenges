const assert = require('assert');
const insertDashes = require('../insertDashes');

describe('Insert Dashes Test', () => {
  it('should return "8-490-2-6" for 849026', () => {
    const addDash = insertDashes(849026);
    assert.deepEqual(addDash, '8-490-2-6');
  });
  it('should return "93011" for 93011', () => {
    const addDash = insertDashes(93011);
    assert.deepEqual(addDash, '93011');
  });
  it('should return "8-6-4-2" for 8642', () => {
    const addDash = insertDashes(8642);
    assert.deepEqual(addDash, '8-6-4-2');
  });
})