// What will the following code output?

console.log(false == '0');
console.log(false === '0');

/**
 * Solution:
 * The above code will output `true` and then `false`.
 * With the loose equality operator, `false`, when compared to `'0'` is
 * implicitly coerced to a number, `0`. Then, `'0'` is implicitly coerced to
 * `0`, resulting in the output of `true`.
 * On `line 6`, there is no implicit coercion that happens because the strict
 * equality operator doesn't do that. Therefore, `false` does not equal `'0'`
 * and results in the output of `false`.
 */