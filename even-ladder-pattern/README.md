# Even Ladder Pattern

## Instructions

1.  In your terminal, run the command `npm install`
2.  Open your text editor and write your code in `evenLadderPattern.js`
3.  In your terminal run the command `npm test` to test your code
4.  To exit test press `ctrl+c` in your terminal

## Challenge

Create a function that returns a ladder pattern of even numbers up to nth number of rows

* If an even number is given as an argument, the pattern should create a ladder of even numbers up to nth
* If 0, 1, or a negative number is given as an argument return an empty string
* If an odd number is given as an argument, the pattern should last up to the largest even number without surpassing the odd number
* See below for examples

* HINT: Use `\n` in string to create a new line

Example:

```
evenLadderPattern(6) // returns the following:
22
4444
666666

evenLadderPattern(9) // returns the following:
22
4444
666666
88888888

evenLadderPattern(-3) // returns ''

evenLadderPattern(0) // returns ''
```
