function addN(arr, n) {
  // ADD CODE HERE
  let updatedArr = [];
  for (let i = 0; i < arr.length; i++) {
    updatedArr.push(arr[i] + n);
  }

  return updatedArr;
}

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]
