/*
    Create a function countBy that accepts an array and a callback, and returns an object. 
    countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
    The value associated with each key will be the number of times that particular return value was returned.
*/

const countBy = (array, callback) => {
  let evenCount = 0,
    oddCount = 0;

  let numberObj = {};

  array.forEach((el, i) => {
    if (callback(el) === "even") {
      evenCount++;
      numberObj["even"] = evenCount;
    } else {
      oddCount++;
      numberObj["odd"] = oddCount;
    }
  });

  return numberObj;
};

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return "even";
  else return "odd";
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
