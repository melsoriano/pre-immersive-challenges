const assert = require('assert');
const findTheLongestWord = require('../findTheLongestWord');

describe('Find The Longest Word Test', () => {
  it('should return "Mystique" for ["Storm", "Mystique", "Jean", "Rogue"]', () => {
    const longestWord = findTheLongestWord(["Storm", "Mystique", "Jean", "Rogue"]);
    assert.deepEqual(longestWord, 'Mystique');
  });
  it('should return "Legolas" for ["Legolas", "Frodo", "Gimli", "Sam"]', () => {
    const longestWord = findTheLongestWord(["Legolas", "Frodo", "Gimli", "Sam"]);
    assert.deepEqual(longestWord, 'Legolas');
  });
})