# Cookie Problem

## Instructions

1.  In your terminal, run the command `npm install`
2.  Open your text editor and write your code in `cookieProblem.js`
3.  In your terminal run the command `npm test` to test your code
4.  To exit test press `ctrl+c` in your terminal

## Challenge

You are given an array representing how many cookies each person in a group has. You don't want the anyone to start arguing over who has more cookies. You want each person to have the same amount of cookies, but you can't take away any cookies from anyone, instead you need to give each person extra cookies until they all have the same amount.

You have to find out how many cookies each person has, and give them each additional cookies until they have as many cookies as the person with the most cookies. Return the total amount of additional cookies you needed give out.

Example:

```
cookieProblem([4, 5, 6]) // returns 3

6 is the most highest amount of cookies, so each person should have 6 cookies
4 + 2 = 6 (2 additional cookies had to be given out)
5 + 1 = 6 (1 additional cookie had to be given out)
2 + 1 = 3 total additional cookies were given out
```
