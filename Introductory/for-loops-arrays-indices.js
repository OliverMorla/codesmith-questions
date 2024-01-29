const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i = 0; i < 3; i++) {
  //assumming that all 3 arrays have length of 3.
  bios.push(
    `My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`
  );

  // View bio
  console.log(bios[i]);
}
