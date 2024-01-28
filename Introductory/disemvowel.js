/*

  Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

*/

const disemvowel = (str) => {
  const regexp = /[aeiouAEIOU]/g;

  const newStr = str.replace(regexp, "");

  return newStr;
};

console.log(disemvowel("CodeSmith")); // => 'CdSmth'
console.log(disemvowel("BANANA")); // => 'BNN'
console.log(disemvowel("hello world")); // => 'hll wrld'
