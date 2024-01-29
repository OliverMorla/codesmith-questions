function imAboutToExplodeWithExcitement(n) {
  // ADD CODE HERE
  while (n != -1) {
    if (n === 5) {
      console.log("Oh wow, I can't handle the anticipation!");
    } else if (n === 3) {
      console.log("I'm about to explode with excitment!");
    } else if (n === 0) {
      console.log("That was kind of a let down");
    } else {
      console.log(n);
    }
    n--;
  }
}

// Uncomment the line below to check your work!
imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'
