// ADD CODE HERE
const saveOutput = (callback, password) => {
  let object = {};
  return (num) => {
    if (typeof num === "string") {
      return object;
    } else {
      object[num] = callback(num);
      return callback(num);
    }
  };
};
// Uncomment these to check your work!
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog("boo")); // should log: { 2: 4, 9: 18 }
