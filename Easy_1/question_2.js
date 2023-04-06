/**
 * How can you determine whether a given string ends with an exclamation mark
 * (!)?
 */

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

/**
 * Solution:
 * To determine if a given string ends with an exclamation mark, we can utilize
 * the `String.endsWith()` method like so:
 */

function endsWithExclamation(str) {
  return str.endsWith('!');
}

console.log(endsWithExclamation(str1));  // true
console.log(endsWithExclamation(str2));  // false