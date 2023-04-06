/**
 * Using the following string, create a new string that contains all lowercase
 * letters except for the first character, which should be capitalized. (See the
 * example output.)
 */

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// Solution 1
let newMunstersDescription = munstersDescription[0].toUpperCase() +
                             munstersDescription.slice(1).toLowerCase();

console.log(newMunstersDescription);

// Solution 2
let newMunstersDescription2 = munstersDescription
  .split('')
  .map((char, idx) => {
    if (idx === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  })
  .join('');

console.log(newMunstersDescription2);