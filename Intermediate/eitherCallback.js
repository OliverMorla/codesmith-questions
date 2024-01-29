/*
    Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
    Notice that the lines of code testing your work are using functions and an array from previous challenges. 

    The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray 
    should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.
*/

function eitherCallback(callback1, callback2) {
  // callback1 = integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0
  // callback2 = over100 = (n) => n > 100;
  console.log(callback1);
  console.log(callback2);

  return (el, i, array) => {
    if (callback1(el) || callback2(el)) {
      return true;
    } else {
      return false;
    }
  };
}

function filterArray(array, callback) {
  // array = [10, 35, 105, 9]
  // callback = eitherCallback(integerSquareRoot, over100);

  // Declaration of new array
  const newArray = [];

  // Using for-loop iterate through each element and invoke it into the callback
  // Ex; hence the element 10 will get passed to the callback which is both integerSquareRoot and over100; intSqRtOrOver100 is the returned value of eitherCallback
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;

const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

// 1. eitherCallback invokes first and passes both functions as arguments then returns a boolean
