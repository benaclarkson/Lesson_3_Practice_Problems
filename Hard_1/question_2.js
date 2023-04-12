// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Try to answer without running the code or looking at the solution.

/**
 * Solution:
 * The last line in the above code logs `{ first: [1, 2] }` to the console. This
 * is due to the fact that when `numArray` is declared and then initialized to
 * the value of the array stored as the value for the `"first"` key of the
 * `object` object, both point to the same array. Thus, when it is mutated on
 * `line 5`, the array inside of `object` is also mutated.
 */