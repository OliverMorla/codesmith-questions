const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

const objToArray = [];
// ADD CODE HERE

for (const key in checkObj) {
  // if num is >= 2 then add to array
  if (checkObj[key] >= 2) {
    objToArray.push(checkObj[key]);
  }
}

console.log(objToArray);
