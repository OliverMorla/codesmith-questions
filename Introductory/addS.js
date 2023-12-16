// ADD CODE HERE
function addS(word) {
  return word + "s";
}

// Approach 2
// const addS = (word) => word + "s";

// Approach 3
// const addS = (word) => word.concat("s");

// Approach 4
// const addS = (word) => `${word}s`;

// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS("cat")); // should log: 'cats'
