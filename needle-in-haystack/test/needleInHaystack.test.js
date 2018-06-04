const assert = require('assert');
const needleInHaystack = require('../needleInHaystack');

describe('How Many Litres Test', () => {
  it('should return 3', () => {
    const findNeedle = needleInHaystack(['haystack', 'haystack', 'haystack', 'needle']);
    assert.deepEqual(findNeedle, 3);
  });
  it('should return false', () => {
    const findNeedle = needleInHaystack(['haystack', 'haystack', 'haystack', 'haystack']);
    assert.deepEqual(findNeedle, false);
  });
})