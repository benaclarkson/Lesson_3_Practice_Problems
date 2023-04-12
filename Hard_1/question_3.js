// Given the following similar sets of code, what will each code snippet print?

// A)
// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

/**
 * Solution:
 * Due to the fact that variables `one`, `two`, and `three` are shadowed within
 * the `messWithVars` function, nothing is changed about the original variables.
 * Thus, the above code logs `'one is: one'` then `'two is: two'` and
 * then `'three is: three'`.
 */


// B)
// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

/**
 * Solution:
 * Due to the fact that variables `one`, `two`, and `three` are shadowed within
 * the `messWithVars` function, nothing is changed about the original variables.
 * Thus, the above code logs `'one is: one'` then `'two is: two'` and
 * then `'three is: three'`.
 */


// C)
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * Solution:
 * The above code results in `'one is: two'`, then `'two is: three'`, and then
 * `'three is: one'`. This is because the parameters and the orignal, global
 * variables both point to the same array. Thus, when one is mutated, it affects
 * both variables. This differs from above because reassignment is not mutation.
 */