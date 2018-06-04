const assert = require('assert');
const acceptableSequence = require('../acceptableSequence');

describe('Acceptable Sequence Test', () => {
  it('should return true for "++a++===+b+=+c+==+"', () => {
    const checkSequence = acceptableSequence('++a++===+b+=+c+==+');
    assert.deepEqual(checkSequence, true);
  });
  it('should return false for "x++===+y+=+z+==+"', () => {
    const checkSequence = acceptableSequence('x++===+y+=+z+==+');
    assert.deepEqual(checkSequence, false);
  });
  it('should return false for "lmnop"', () => {
    const checkSequence = acceptableSequence('lmnop');
    assert.deepEqual(checkSequence, false);
  });
})