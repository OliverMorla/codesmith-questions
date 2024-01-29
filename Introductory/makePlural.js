function makePlural(arr) {
  // ADD CODE HERE
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + "s";
  }
  return arr;
}

const arr1 = ["lion", "tiger", "bear"];
const arr2 = ["computer", "video game", "system"];

// Uncomment these to check your work!
console.log(makePlural(arr1)); // should log: ['lions', 'tigers', 'bears']
console.log(makePlural(arr2)); // should log: ['computers', 'video games', 'systems']
