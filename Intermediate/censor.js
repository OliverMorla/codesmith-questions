// ADD CODE HERE
const censor = () => {
  let cache = {};
  return (str, newStr) => {
    if (newStr) {
      cache[str] = newStr;
    } else {
      for (let key in cache) {
        str = str.replace(key, cache[key]);
      }
      return str;
    }
  };
};
// Uncomment these to check your work!
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // should log: 'The slow, brown fox jumps over the lazy cats.'
