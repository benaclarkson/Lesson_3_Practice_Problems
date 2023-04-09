/**
 * Write three different ways to remove all of the elements from the following
 * array:
 */

let numbers = [1, 2, 3, 4];

// Solution 1
numbers.slice().forEach(() => {
  numbers.pop();
});

// Solution 2
numbers.slice().forEach(() => {
  numbers.shift();
});

// Solution 3
numbers.splice(0, numbers.length);