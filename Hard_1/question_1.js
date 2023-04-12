// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// Try to answer without running the code or looking at the solution.

/**
 * Solution:
 * No, they will not return the same results. `first()` returns a block of code,
 * whereas `second()` returns `undefined`, due to the line break that occurs
 * after the return statement on `line 10`.
 */