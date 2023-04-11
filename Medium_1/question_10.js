// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo());

/**
 * Solution:
 * The above code returns "no". This is due to the fact that the return value
 * of invoking `foo()` is always `"yes"`, which is then passed to `bar()` as an
 * argument. When the ternary operation is evaluated, `param` is set to `"yes"`.
 * It is essentially saying `"yes" === "no" ? "yes" : "no"`, which evaluates to
 * `"no"`, which is the value that is returned.
 */