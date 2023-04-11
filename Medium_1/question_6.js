// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// How can you reliably test if a value is NaN?

/**
 * Solution:
 * The above code will log `false` to the console.
 *
 * The only way to reliably test if a value is NaN is to use `Number.isNaN()`.
 */