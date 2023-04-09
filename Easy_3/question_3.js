// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Try to answer without running the code.

/**
 * Solution:
 * The above code will log `"hello there"`. Because we are dealing with strings,
 * which are primitive values, when `str2` is assigned to `str1`, both variables
 * point to different strings that happen to have the same value. This is
 * important because when `str2` is reassigned, we can then know that `str1` is
 * left unaffected.
 */