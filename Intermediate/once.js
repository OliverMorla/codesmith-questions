const once = (callback) => {
  let hasItRun = false;
  let cashedResult;
  return (num) => {
    if (!hasItRun) {
      cashedResult = callback(num);
      hasItRun = true;
      return cashedResult;
    }

    return cashedResult;
  };
};

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
