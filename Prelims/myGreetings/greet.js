/* 
SALALILA, DAYNA MICAELA M. 
WD-202
*/

// In "greet.js", define a function called "greet" that takes a name as a parameter and returns the string "Hello, " followed by the name.

function greet(name1, name2) {
  return 'Hello ' + name1 + ' and ' + name2 + '!';
}

// Export the "greet" function using module.exports
module.exports.greet = greet;
