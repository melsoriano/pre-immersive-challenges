const assert = require('assert');
const howManyLitres = require('../howManyLitres');

describe('How Many Litres Test', () => {
  it('should return 2 for 5 hours', () => {
    const countLitres = howManyLitres(5);
    assert.deepEqual(countLitres, 2);
  });
  it('should return 4 for 8 hours', () => {
    const countLitres = howManyLitres(8);
    assert.deepEqual(countLitres, 4);
  });
  it('should return 43787 for 8 hours', () => {
    const countLitres = howManyLitres(87575);
    assert.deepEqual(countLitres, 43787);
  });
})