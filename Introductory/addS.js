/*
    Create a function addS that accepts a string, and returns the string with an "s" added to the end. 
*/

// Approach 1 - Function Declaration using + operator:
function addS(word) {
  return word + "s";
}

// Approach 2 - Arrow Function using + operator:
// const addS = (word) => word + "s";

// Approach 3 - Arrow Function using .concat():
// const addS = (word) => word.concat("s");

// Approach 4 - Arrow Function using template literals:
// const addS = (word) => `${word}s`;

// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS("cat")); // should log: 'cats'
