const addByX = (x) => {
  return (num) => {
    return num + x;
  };
};

const addByTwo = addByX(2);

console.log(addByTwo(1));
console.log(addByTwo(2));
console.log(addByTwo(3));
