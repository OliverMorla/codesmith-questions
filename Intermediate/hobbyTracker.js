function hobbyTracker(hobbies) {
  let object = {};

  hobbies.forEach((el, i) => {
    object[el] = 0;
  });

  return (hobby, hours) => {
    if (object.hasOwnProperty(hobby) && object[hobby] === 0) {
      object[hobby] = hours;
    } else if (hobby === undefined && hours === undefined) {
      for (const key in object) {
        object[key] = 0;
      }
      return "tracker has been reset!";
    } else if (object.hasOwnProperty(hobby) && object[hobby] !== 0) {
      object[hobby] += hours;
    }

    return object;
  };
}

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(["yoga", "baking", "piano"]);
updateHobbies("yoga", 2);
updateHobbies("baking", 4);
updateHobbies("yoga", 1);
console.log(updateHobbies("piano", 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies("baking", 1)); // --> { yoga: 0, baking: 1, piano: 0}
