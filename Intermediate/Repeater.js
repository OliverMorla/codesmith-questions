/*
    Write a function that takes an input character and returns that character repeated 5 times using recursion. 
    For example, if the input is 'g', then the output should be 'ggggg'.
*/

// Approach 1
const repeater = (char) => {
  // Base case: if char var reaches a length of 5, stop the recursion
  if (char.length === 5) return char;

  // Recursive case: return the char var plus the first element of the char var
  return repeater(char + char[0]);
};

// Approach 2
// const repeater = (char) => {
//   return char.length === 5 ? char : repeater(char + char[0]);
// };

// Approach 3
// const repeater = (char, count = 0) => {
//   if (count === 5) return '';

//   return char + repeater(char, count + 1);
// };

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater("g"));
console.log(repeater("j"));
