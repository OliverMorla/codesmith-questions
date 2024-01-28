function getTheRange(arr) {
  // ADD CODE HERE
  let min = arr[0],
    max = arr[0],
    range = 0;

  arr.forEach((num, index) => {
    if (min < num) {
      min = min;
    } else {
      min = num;
    }
  });

  arr.forEach((num, index) => {
    if (max > num) {
      max = max;
    } else {
      max = num;
    }
  });

  range = max - min;

  return [min, max, range];
}

// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
