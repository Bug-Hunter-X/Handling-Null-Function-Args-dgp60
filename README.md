# Unhandled Null Values in Function Arguments
This repository demonstrates a common error in JavaScript: not handling null values in function arguments. The `foo` function adds two numbers. However, if either input is `null`, the function fails to handle this properly, leading to unexpected behavior.

## Bug
The `bug.js` file contains a function `foo` that performs addition but doesn't handle `null` inputs. If a `null` value is passed in, the result is not as expected. 

## Solution
The `bugSolution.js` file provides a solution by explicitly checking for `null` inputs and handling them gracefully. This prevents unexpected behavior and ensures that the function works reliably even when null values are present.

## How to run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in your preferred text editor.
3. Run the code using your JavaScript runtime environment, or in a browser's developer console.