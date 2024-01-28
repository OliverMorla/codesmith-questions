/*

Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.

*/

function addingAllTheWeirdStuff(array1, array2) {
  // ADD CODE HERE
  let oddSum = 0,
    evenSum = 0,
    bonus = false;

  array2.forEach((num, i) => {
    if (num % 2 === 1) {
      oddSum += num;
    } else {
      evenSum += num;
    }

    if (num > 20 && !bonus) {
      array1.forEach((num, i) => {
        array1[i] += 1;
      });

      bonus = true;
    }
  });

  array1.forEach((num, i) => {
    if (num < 10) {
      array1[i] += oddSum;
    } else {
      array1[i] += evenSum;
    }
  });

  //   console.log("oddSum: " + oddSum);
  //   console.log("evenSum: " + evenSum);

  return array1;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 29, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
