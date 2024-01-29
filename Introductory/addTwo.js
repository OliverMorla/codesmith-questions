/*
    Create a function addTwo that accepts a number, and returns the number plus 2.
*/

// Approach 1 - Function Declaration using + operator:
function addTwo(num) {
  return num + 2;
}

// Approach 2 - Arrow Function without using return keyword and {}:
// const addTwo = (num) => num + 2;

// Approach 3 - Curried Function returning an arrow function:
// function add() {
//   return (num) => {
//     return num + 2;
//   };
// }

// Uncomment these to check your work for the Curried Function!
// const addTwo = add();
// const result = addTwo(2);

// Uncomment these to check your work!
console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12
