const assert = require('assert');
const cookieProblem = require('../cookieProblem');

describe('Cookie Problem Test', () => {
  it('should return 9 for [3,8,7,5]', () => {
    const giveCookies = cookieProblem([5, 8, 6, 4]);
    assert.deepEqual(giveCookies, 9);
  });
  it('should return 19 for [1, 3, 4, 9]', () => {
    const giveCookies = cookieProblem([1, 3, 4, 9]);
    assert.deepEqual(giveCookies, 19);
  });
})