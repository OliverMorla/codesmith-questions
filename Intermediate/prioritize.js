/*
        Create a function prioritize that accepts an array and a callback. The callback will return either true or false. 
        prioritize will iterate through the array and perform the callback on each element, and return a new array, where all 
        the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
*/

const prioritize = (array, callback) => {
  let newArr = [];
  let FalseValues = [];
  array.forEach((el, i) => {
    if (callback(el)) {
      newArr.push(el);
    } else {
      FalseValues.push(el);
    }
  });

  return [...newArr, ...FalseValues];
};

// Uncomment these to check your work!
function startsWithS(str) {
  return str[0].toLowerCase() === "s";
}
const tvShows = ["curb", "rickandmorty", "seinfeld", "sunny", "friends"];
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
