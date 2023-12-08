const x = 23;

function isX(num) {
  const x = 44;
  return num === x;
}

function isY(num) {
  return num === x;
}

const one = isX(44);
const two = isY(x);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true
