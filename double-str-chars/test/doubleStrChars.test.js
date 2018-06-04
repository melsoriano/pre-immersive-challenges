const assert = require('assert');
const doubleStrChars = require('../doubleStrChars');

describe('Double Characters Test', () => {
  it('should return "JJaavvaaSSccrriipptt" for "JavaScript"', () => {
    const doubleStrings = doubleStrChars('JavaScript');
    assert.deepEqual(doubleStrings, "JJaavvaaSSccrriipptt");
  });
  it('should return "ggiitt  ccoommmmiitt!!" for "git commit!"', () => {
    const doubleStrings = doubleStrChars('git commit!');
    assert.deepEqual(doubleStrings, "ggiitt  ccoommmmiitt!!");
  });
  it('should return "not a string!" for undefined', () => {
    const doubleStrings = doubleStrChars(undefined);
    assert.deepEqual(doubleStrings, "not a string!");
  });
  it('should return "not a string!" for 12345', () => {
    const doubleStrings = doubleStrChars(12345);
    assert.deepEqual(doubleStrings, "not a string!");
  });
  it('should return "not a string!" for false', () => {
    const doubleStrings = doubleStrChars(false);
    assert.deepEqual(doubleStrings, "not a string!");
  })

})