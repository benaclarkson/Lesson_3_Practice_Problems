// What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// Try to answer without running the code.

/**
 * Solution:
 * Due to the fact that there is no `+` operator for the `Array` object,
 * implicit coercion takes place, converting both objects to strings, then
 * concatenating them. Thus, `1,2,34,5` is logged to the console.
 */