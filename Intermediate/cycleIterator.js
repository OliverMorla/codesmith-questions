// ADD CODE HERE
const cycleIterator = (array) => {
  let i = 0;
  return () => {
    const result = array[i++];
    if (i >= array.length) i = 0;
    return result;
  };
};
// Uncomment these to check your work!
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
