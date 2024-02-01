/*
    Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
*/

// const intersection = (arr) => {
//   const firstArray = arr[0];
//   const newArr = [];

//   for (let i = 0; i < firstArray.length; i++) {
//     let isCommon = true;
//     let element = firstArray[i];

//     for (let j = 1; j < arr.length; j++) {
//       if (!arr[j].includes(element)) {
//         isCommon = false;
//       }
//     }

//     if (isCommon) {
//       newArr.push(firstArray[i]);
//     }
//   }

//   return newArr;
// };

const intersection = (arr) => {
  return arr.reduce((acc, currentArray) => {
    console.log("acc: " + acc);
    console.log("currentArray: " + currentArray);
    return acc.filter((el) => {
      console.log("filterFunctionEl: " + el);
      console.log("exist: " + currentArray.includes(el) + " in " + currentArray)
      return currentArray.includes(el);
    });
  });
};

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
