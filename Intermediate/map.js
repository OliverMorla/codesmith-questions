/*

    Create a function subtractTwo that accepts a number and returns that number minus 2.

    Then create a function map that takes two inputs -

        1. an array of numbers (a list of numbers)
        2. a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
    
    Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.

*/

// Create a function called subtractTwo that accepts a number and returns that number minus 2.
const subtractTwo = (num) => num - 2;

// Create a function called map that takes two inputs. The first input is an array of numbers (a list of numbers).
// The second input, 'callback', is a function that is applied to each element of the array (inside of the function 'map').
const map = (numArr, callback) => {
  // Declaration of new array
  const newArr = [];

  // Using for-loop to iterate through each element and invoke 'callback' function on each element
  for (let i = 0; i < numArr.length; i++) {
    newArr.push(callback(numArr[i]));
  }

  // Return new array
  return newArr;
};

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]
