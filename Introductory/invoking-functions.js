// let calls = "";

// function jerry(str) {
//   str = "Jerry" + kramer("Kramer") + george("George") + elaine("Elaine");
//   return str;
// }

// function george(str) {
//   return str;
// }

// function elaine(str) {
//   return str;
// }

// function kramer(str) {
//   return str;
// }

// // // Uncomment these to check your work!
// calls = jerry(calls);
// console.log(calls); // should log: 'JerryKramerGeorgeElaine'

let calls = "";

function jerry(str) {
  str += "Jerry";
  return kramer(str);
}

function george(str) {
  str += "George";
  return elaine(str);
}

function elaine(str) {
  str += "Elaine";
  return str;
}

function kramer(str) {
  str += "Kramer";
  return george(str);
}

// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'
