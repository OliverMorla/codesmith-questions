/*

    Part 1
    Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. 
    forEach does not return anything. Please do not use the native forEach or map method.
    
    Part 2
    Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.

*/

// Create a function called subtractTwo that accepts a number and returns that number minus 2.

// Create a function forEach which takes an array and a callback
const forEach = (arr, callback) => {
  // using a for-loop for each iteration, we pass our callback function every element of the array.
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

// Create a function called map that takes two inputs. The first input is an array of numbers (a list of numbers). The second input, 'callback', is a function that is applied to each element of the array (inside of the function 'map').
const map = (numArr, callback) => {
  const newArr = [];

  // Using for-each we just created to iterate through each element and call 'callback' function on each element
  forEach(numArr, (i) => {
    newArr.push(callback(i));
  });

  return newArr;
};

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(["a", "b", "c"], (i) => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]
