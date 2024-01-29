/*
    Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
*/

const intersection = (arrays) => {
  // If no arrays are provided or there's only one array, return it as is
  if (!arrays || arrays.length <= 1) return arrays;

  const resultArray = [];
  const firstArray = arrays[0];

  // Iterate over each element of the first array
  for (let i = 0; i < firstArray.length; i++) {
    let element = firstArray[i];
    let isCommon = true;

    // Check if this element is in all other arrays
    for (let j = 1; j < arrays.length; j++) {
      if (!arrays[j].includes(element)) {
        isCommon = false;
        break;
      }
    }

    // If the element is common to all arrays, add it to the result
    if (isCommon) {
      resultArray.push(element);
    }
  }

  return resultArray;
};

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
