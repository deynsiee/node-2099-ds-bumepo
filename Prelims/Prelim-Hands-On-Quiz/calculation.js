/*
SALALILA, DAYNA MICAELA M
WD-202
*/

// Create a new folder, "Prelim-Hands-On-Quiz" and a new file inside the folder and name it calculation.js.

//a. add(a, b): takes two numbers as inputs and returns their sum.
function add(a, b) {
  return a + b;
}

// b. subtract(a, b): takes two numbers as inputs and returns their difference.
function subtract(a, b) {
  return a - b;
}

// c. multiply(a, b): takes two numbers as inputs and returns their product.
function multiply(a, b) {
  return a * b;
}

// d. divide(a, b): takes two numbers as inputs and returns the result of a / b.
function divide(a, b) {
  return a / b;
}

// Define and export four functions using module.exports:
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
