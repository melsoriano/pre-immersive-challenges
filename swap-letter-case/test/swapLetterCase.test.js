const assert = require('assert');
const swapLetterCase = require('../swapLetterCase');

describe('Swap Letter Test', () => {
  it('should return "javascript" for "JAVASCRIPT"', () => {
    const changeCase = swapLetterCase('JAVASCRIPT');
    assert.deepEqual(changeCase, 'javascript');
  });
  it('should return "LIVING the DREAM" for "living THE dream"', () => {
    const changeCase = swapLetterCase('living THE dream');
    assert.deepEqual(changeCase, 'LIVING the DREAM');
  });
  it('should return "COOL STORY YO!!" for "cool story yo!!"', () => {
    const changeCase = swapLetterCase('cool story yo!!');
    assert.deepEqual(changeCase, 'COOL STORY YO!!');
  });
  it('should return "12345"', () => {
    const changeCase = swapLetterCase('12345');
    assert.deepEqual(changeCase, '12345');
  });
})