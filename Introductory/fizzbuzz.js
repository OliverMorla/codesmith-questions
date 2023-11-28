const fb = [];
// ADD CODE HERE
for (let i = 1; i < 17; i++) {
  const isDivisibleBy3 = i % 3 === 0;
  const isDivisibleBy5 = i % 5 === 0;

  if (isDivisibleBy3 && !isDivisibleBy5) {
    fb.push("fizz");
  } else if (isDivisibleBy5 && !isDivisibleBy3) {
    fb.push("buzz");
  } else if (isDivisibleBy3 && isDivisibleBy5) {
    fb.push("fizzbuzz");
  } else {
    fb.push(i);
  }
}

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
console.log(fb);
