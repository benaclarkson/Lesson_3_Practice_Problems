// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

/**
 * Solution:
 * No, the above code will not produce an error. Line 3 will insert 3 empty
 * items into the array prior to adding the integer `5` at index `6`.
 */

// Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/**
 * Bonus Solution:
 * Line 14 will return `undefined` because it is an empty item in the array.
 */