/*
    Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. 
    goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array 
    consisting only the keys whose associated values yielded a true return value from the callback.
*/

// Approach 1 - using Object.keys() and .filter():
const goodKeys = (object, callback) => {
  return Object.keys(object).filter((key) => callback(object[key]));
};

// Approach 2 - using for...in loop:
// function goodKeys(object, callback) {
//   const result = [];
//   for (const key in object) {
//     if (callback(object[key])) {
//       result.push(key);
//     }
//   }
//   return result;
// }

// Approach 3 - using for...of loop:
// function goodKeys(object, callback) {
//   const result = [];
//   for (const key of Object.keys(object)) {
//     if (callback(object[key])) {
//       result.push(key);
//     }
//   }
//   return result;
// }

// Approach 4 - using .reduce():
// function goodKeys(object, callback) {
//   return Object.keys(object).reduce((result, key) => {
//     if (callback(object[key])) {
//       result.push(key);
//     }
//     return result;
//   }, []);
// }

// Approach 5 - using .forEach():
// function goodKeys(object, callback) {
//   const result = [];
//   Object.keys(object).forEach((key) => {
//     if (callback(object[key])) {
//       result.push(key);
//     }
//   });
//   return result;
// }

// Approach 6 - using .map():
// function goodKeys(object, callback) {
//   return Object.keys(object).map((key) => {
//     if (callback(object[key])) {
//       return key;
//     }
//   });
//   return result.filter((key) => key);
// }

// Approach 7 - using .filter() and .map():
// function goodKeys(object, callback) {
//   return Object.keys(object)
//     .filter((key) => callback(object[key]))
//     .map((key) => key);
// }

// Approach 8 - using .reduce() and .map():
// function goodKeys(object, callback) {
//   return Object.keys(object).reduce((result, key) => {
//     if (callback(object[key])) {
//       result.push(key);
//     }
//     return result;
//   }, []);
// }

// Approach 9 - using .reduce() and .concat():
// function goodKeys(object, callback) {
//   return Object.keys(object).reduce((result, key) => {
//     if (callback(object[key])) {
//       return result.concat(key);
//     }
//     return result;
//   }, []);
//   return result;
// }

// Approach 10 - using .reduce() and ternary operator:
// function goodKeys(object, callback) {
//   return Object.keys(object).reduce((result, key) => {
//     return callback(object[key]) ? result.concat(key) : result;
//   }, []);
// }

// Approach 11 - using .reduce() and .push():
// function goodKeys(object, callback) {
//   return Object.keys(object).reduce((result, key) => {
//     if (callback(object[key])) {
//       result.push(key);
//     }
//     return result;
//   }, []);
// }

// Approach 12 - using .reduce() and .filter():
// function goodKeys(object, callback) {
//   return Object.keys(object).reduce((result, key) => {
//     return callback(object[key]) ? result.concat(key) : result;
//   }, []);
// }

// Approach 13 - using .reduce() and .filter() and .map():
// function goodKeys(object, callback) {
//   return Object.keys(object).reduce((result, key) => {
//     if (callback(object[key])) {
//       result.push(key);
//     }
//     return result;
//   }, []);
// }

// Approach 14 - using .reduce() and .filter() and .map():
// function goodKeys(object, callback) {
//   return Object.keys(object).reduce((result, key) => {
//     return callback(object[key]) ? result.concat(key) : result;
//   }, []);
// }

// Uncomment these to check your work!
const sunny = {
  mac: "priest",
  dennis: "calculator",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === "bird";
}
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
