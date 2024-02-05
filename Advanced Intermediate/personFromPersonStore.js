/*
    Create a function personFromPersonStore that takes as input a name and an age. 
    When called, the function will create person objects using the Object.create method on the personStore object.
*/

const personStore = {
  greet: function () {
    console.log("hello");
  },
};

const personFromPersonStore = (name, age) => {
  let person = Object.create(personStore);

  person.name = name;
  person.age = age;

  // add code here
  return person;
};

const sandra = personFromPersonStore("Sandra", 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'
