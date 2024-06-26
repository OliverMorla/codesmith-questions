/*
	Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
		1. Create an empty object
		2. Add a name property to the newly created object with its value being the name argument passed into the function
		3. Add an age property to the newly created object with its value being the "age" argument passed into the function
		4. Return the object
*/

const makePerson = (name, age) => {
  return {
    name,
    age,
  };
};

const vicky = makePerson("Vicky", 24);

// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
