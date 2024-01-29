/*
    Create a function sayHello that accepts a string argument and returns the string 'Hi, ' with the passed-in string added to the end.
*/

// Approach 1 - Function declaration with parameter word
function sayHello(word) {
  // Return string with "Hi, " and word concatenated
  return "Hi, " + word;
}

// Uncomment these to check your work!
console.log(sayHello("Mary")); // should log: 'Hi, Mary'
console.log(sayHello("Haley")); // should log: 'Hi, Haley'
