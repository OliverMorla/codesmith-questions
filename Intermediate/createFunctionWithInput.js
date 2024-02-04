// ADD CODE HERE
const createFunctionWithInput = (str) => {
  return () => str;
};
// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput("sample");
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput("hello");
console.log(helloFunc()); // should log: 'hello'
