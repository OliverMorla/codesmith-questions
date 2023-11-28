const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

let found = 0;
// ADD CODE HERE
for (const key in checkObj) {
  if (key === "foundNum") {
    found += 1;
  }
}

// Verify results
console.log(found);
