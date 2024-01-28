/*

Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. If the key 'Waldo' is not found, the function should return 'Where's Waldo?'F

*/

const findWaldo = (object) => {
  for (const key in object) {
    if (key === "Waldo") {
      return object[key];
    }
  }

  return "Where's Waldo?";
};

// ADD CODE HERE

// Uncomment these to check your work!
const DC = { Bruce: "Wayne", Harley: "Quinn" };
const supernatural = {
  Sam: "Winchester",
  Dean: "Winchester",
  Waldo: "unknown",
};
console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'
