/**
 * Given a number and an array, determine whether the number is included in the
 * array.
 */

function numberInArray(arr, num) {
  return arr.includes(num);
}

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;
let number2 = 95;

console.log(numberInArray(numbers, number1)); // false
console.log(numberInArray(numbers, number2)); // true