/*

Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. 
The order of the elements in the array does not matter, but repeated elements should be grouped.

*/

const arrayBuilder = (object) => {
  let myArr = [];

  for (const key in object) {
    for (let i = 0; i < object[key]; i++) {
      myArr.push(key);
    }
  }
  return myArr;
};

// Uncomment these to check your work!
console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
