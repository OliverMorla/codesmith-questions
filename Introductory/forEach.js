// * Peudocode * //

/*

 - Create a function 'droids' that takes a string array arg 'arr'
 - Using a 'forEach' method on 'arr', if array contains string element 'Droids' return 'Found Droids!' else 'These are not the droids you're looking for.' 


*/

// Approach 1
// function droids(arr) {
//   let result;

//   arr.forEach((element, index) => {
//     if (element === "Droids") {
//       result = "Found Droids!";
//     } else {
//       result = "These are not the droids you\'re looking for.";
//     }
//   });

//   return result;
// }

// Approach 2
// const droids = (arr) => {
//   let result;
//   arr.forEach((element, index) => {
//     element === "Droids"
//       ? (result = "Found Droids!")
//       : (result = "These are not the droids you\'re looking for.");
//   });
//   return result;
// };

// Approach 3
// const droids = function (arr) {
//   let result;
//   arr.forEach((element, index) => {
//     element === "Droids"
//       ? (result = "Found Droids!")
//       : (result = "These are not the droids you\'re looking for.");
//   });
//   return result;
// };

// Uncomment these to check your work!
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];
console.log(droids(starWars)); // should log: "Found Droids!"
console.log(droids(thrones)); //should log: "These are not the droids you're looking for."
