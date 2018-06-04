const assert = require('assert');
const findTheStray = require('../findTheStrayValue');

describe('Find The Stray Value Test', () => {
  it('should return "yoda" for ["darth vader", "darth vader", "yoda"]', () => {
    const findStrayValue = findTheStray(["darth vader", "darth vader", "yoda"]);
    assert.deepEqual(findStrayValue, "yoda");
  });
  it('should return 7 for [8, 8, 8, 8, 8, 8, 7, 8, 8]', () => {
    const findStrayValue = findTheStray([8, 8, 8, 8, 8, 8, 7, 8, 8]);
    assert.deepEqual(findStrayValue, 7);
  });
  it('should return "0" for  [0, 0, "0", 0, 0]', () => {
    const findStrayValue = findTheStray([0, 0, "0", 0, 0]);
    assert.deepEqual(findStrayValue, "0");
  });
})