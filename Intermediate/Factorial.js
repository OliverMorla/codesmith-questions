const factorial = (num, i = num - 1) => {
  if (i === 0) {
    return num;
  } else {
    return factorial(num * i, i - 1)
  }
};

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
