/*
    Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. 
    For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

    The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.
*/

// Create a function called pluralize that takes an array of strings as input
const pluralize = (arr) => {
  // Declaration of new array
  const newArr = [];

  // Add "s" to the end of each element in array using a single loop
  arr.forEach((el, i) => {
    // Push new element to new array
    newArr.push(arr[i] + "s");
  });

  // Return new array
  return newArr;
};

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
