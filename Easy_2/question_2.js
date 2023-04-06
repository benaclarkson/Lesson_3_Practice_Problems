/**
 * PROBLEM:
 * The Array.prototype.reverse method reverses the order of elements in an
 * array, and Array.prototype.sort can rearrange the elements in a variety of
 * ways, including descending. Both of these methods mutate the original array
 * as shown below. Write two distinct ways of reversing the array without
 * mutating the original array. Use reverse for the first solution, and sort for
 * the second.
 *
 * Input:
 * Array of elements
 *
 * Output:
 * A copy of the array, reversed. Leave the original array unaffected.
 * A copy of the array, sorted in decsending order. Leave original array
 *   unaffected.
 *
 * Rules:
 * Do not mutate original array
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * Array
 *
 *
 * ALGORITHM (reverse function):
 * - Create a shallow copy of array to mutate
 * - Create a new empty array in which to store new values
 * - Iterate over original array
 *   - On each iteration, Array.pop() the shallow copy and Array.push() the
 *     return value into the new array
 * - Return the new array
 *
 * ALGORITHM (sort function):
 * - Create a shallow copy of the array
 * - Create an empty array to store the result in
 * - Iterate through input array
 *   - Find the max number Math.max(...arrCopy) & store in variable
 *   - Remove that element from the arrCopy and push() it into result
 * - Return result
 */

function manualReverse(arr) {
  let arrCopy = arr.slice();
  let result = [];
  arr.forEach((_) => {
    result.push(arrCopy.pop());
  });

  return result;
}

function manualSort(arr) {
  let arrCopy = arr.slice();
  let result = [];
  arr.forEach(() => {
    let maxNum = Math.max(...arrCopy);
    arrCopy[arrCopy.indexOf(maxNum)] = '';
    result.push(maxNum);
  });

  return result;
}

let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
numbers = manualReverse(numbers);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
numbers = manualSort(numbers);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [22, 15, 742, 12, 302];
numbers = manualSort(numbers);
console.log(numbers); // [ 742, 302, 22, 15, 12 ]

// Bonus Question: Can you do it using the Array.prototype.forEach() method?