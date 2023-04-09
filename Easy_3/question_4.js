// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// Try to answer without running the code.

/**
 * Solution:
 * The above code will log `[{ first: 42 }, { second: "value2" }, 3, 4, 5]`.
 * This is due to the fact that `Array.slice()` creates a shallow copy of the
 * caller. Although the array objects that `arr1` and `arr2` point to are
 * different objects in memory, the objects within the elements of those array
 * objects point to the same objects. Thus, if `line 5` was instead set to
 * `arr2[0] = 42` it would have no affect on `arr1`. However, since the pointer
 * object with the reference object is mutated, it affects both reference
 * objects.
 */