const netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// Add the show "13 Reasons Why" to the end of the array using .push() method
netflixShows.push("13 Reasons Why");

// Approach 2 - The .unshift() method adds to the start of the array
// netflixShows.unshift("13 Reasons Why")

// Approach 3 - The .splice() method adds to the end of the array
// netflixShows.splice(netflixShows.length, 0, "13 Reasons Why")

// Approach 4 - The .length property returns the length of the array, then we can mutate the array by assigning a new value to the last index of the array.
// netflixShows[netflixShows.length] = "13 Reasons Why";

// Write a console.log statement below to check your work!
console.log(netflixShows);
