function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values by returning 0
  }
  return a + b; // Perform addition
}

console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3