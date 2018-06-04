const assert = require('assert');
const reverseMessage = require('../reverseMessage');

describe('Reverse Message Test', () => {
  it('should return "Dt#67t Ah65yth" for "hty56hA T76#Td"', () => {
    const reverse = reverseMessage('hty56hA T76#Td');
    assert.deepEqual(reverse, 'Dt#67t Ah65yth');
  });
  it('should return "!yad Eht Si Yadot" for "Today is the day!"', () => {
    const reverse = reverseMessage('Today is the day!');
    assert.deepEqual(reverse, '!yad Eht Si Yadot');
  });
})