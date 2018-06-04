# Move The Zeros

## Instructions

1.  In your terminal, run the command `npm install`
2.  Open your text editor and write your code in `moveTheZeros.js`
3.  In your terminal run the command `npm test` to test your code
4.  To exit test press `ctrl+c` in your terminal

## Challenge

You are given two arguments, an array of numbers and a boolean value `isRight` that defaults to true. Return the array with all the zeros to the right of the array if `isRight` is true, otherwise move all the zeros to the left if `isRight` is false. The order of the other numbers should not change.

Example:

```
moveTheZeros([5, 0, 0, 6, 1], false) // returns [0, 0, 5, 6, 1]

moveTheZeros([1, 2, 3, 0, 0, 4, 5, 0], true) // returns  [1, 2, 3, 4, 5, 0, 0, 0]
```
