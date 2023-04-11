// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/**
 * Solution:
 * The above code will log `34` to the console. This is due to the fact that
 * numbers are primitive values and cannot be mutated. Passing `answer` to the
 * `messWithit` function has no affect on the global `answer` variable.
 */