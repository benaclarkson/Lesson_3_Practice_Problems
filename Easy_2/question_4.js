// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

// Solution 1
console.log('Four score and ' + famousWords);

// Solution 2
console.log('Four score and '.concat(famousWords));