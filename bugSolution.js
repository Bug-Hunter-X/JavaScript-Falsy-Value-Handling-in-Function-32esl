function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0;
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3
console.log(foo(0,1)); //Output: 1
console.log(foo(1,false)); //Output: NaN. Note this case requires further consideration based on the desired behavior.