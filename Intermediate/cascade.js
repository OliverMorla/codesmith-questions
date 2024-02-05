function cascade(number) {
    // Base case: if the number is 0, just return.
    if (number === 0) {
      return;
    }
  
    console.log(number); // Print the current state of the number
  
    // Recursive step: reduce the number by dividing by 10 and call cascade
    cascade(Math.floor(number / 10));
  
    // After reaching the base case, print the number again as the call stack unwinds
    if (number > 9) {
      console.log(number);
    }
  }

// // Uncomment to test your work!
cascade(111);
// // should print
// /*
// 111
// 11
// 1
// 11
// 111
// */
