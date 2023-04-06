/**
 * Determine whether the name Dino appears in the strings below -- check each
 * string separately):
 */

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// Solution 1
function containsSubstring(str, search) {
  return str.includes(search);
}

console.log(containsSubstring(str1, 'Dino'));
console.log(containsSubstring(str2, 'Dino'));

// Solution 2
function containsSubstring2(str, search) {
  return str.match(search) !== null;
}

console.log(containsSubstring2(str1, /Dino/));
console.log(containsSubstring2(str2, /Dino/));