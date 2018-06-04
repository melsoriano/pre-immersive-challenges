const assert = require('assert');
const evenLadderPattern = require('../evenLadderPattern');

describe('Even Ladder Pattern Test', () => {
  it('1 should return ""', () => {
    const pattern = evenLadderPattern(1);
    assert.deepEqual(pattern, "");
  });
  it('0 should return ""', () => {
    const pattern = evenLadderPattern(0);
    assert.deepEqual(pattern, "");
  });
  it('-7 should return ""', () => {
    const pattern = evenLadderPattern(-7);
    assert.deepEqual(pattern, "");
  });
  it('10 should return: \n"22\n4444\n666666\n88888888\n10101010101010101010"', () => {
    const pattern = evenLadderPattern(10);
    assert.deepEqual(pattern, "22\n4444\n666666\n88888888\n10101010101010101010");
  });
  it('7 should return: \n"22\n4444\n666666"', () => {
    const pattern = evenLadderPattern(7);
    assert.deepEqual(pattern, "22\n4444\n666666");
  });
})