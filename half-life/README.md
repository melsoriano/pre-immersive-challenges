# Half Life

## Instructions

1.  In your terminal, run the command `npm install`
2.  Open your text editor and write your code in `halfLife.js`
3.  In your terminal run the command `npm test` to test your code
4.  To exit test press `ctrl+c` in your terminal

## Challenge

The half-life of a radioactive substance is the time it takes (on average) for one-half of its atoms to undergo radioactive decay.

You are given the initial quantity of a radioactive substance, the quantity remaining after a given period of time, and the period of time as arguments. Return the half life of that substance.

* Hint: You may want to use Math.log2

Example:

```
// if quantity halves in 1 time period, half-life = 1
halfLife(10, 5, 1) // returns  1

// if quantity halves in 2 time periods, half-life = 2
halfLife(8,4,2) // returns 2

// if quantity is one-quarter after 2 time periods, half-life = 1
halfLife(12,3,2) // returns 1
```
