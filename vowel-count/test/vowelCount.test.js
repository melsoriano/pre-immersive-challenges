const assert = require('assert');
const vowelCount = require('../vowelCount');

describe('Vowel Count Test', () => {
  it('should return 5 for "abracadabra"', () => {
    const getCount = vowelCount('abracadabra');
    assert.deepEqual(getCount, 5);
  });
  it('should return 0 for "hy frnd"', () => {
    const getCount = vowelCount('hy frnd');
    assert.deepEqual(getCount, 0);
  });
  it('should return 21 for "how much wood would a wood chuck chuck if a wood chuck could chuck wood"', () => {
    const getCount = vowelCount('how much wood would a wood chuck chuck if a wood chuck could chuck wood');
    assert.deepEqual(getCount, 21);
  });
})