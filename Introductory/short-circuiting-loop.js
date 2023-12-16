// * Peudocode * //

/*

 - Create a function 'holidays' that takes a string array 'arr'
 - If array contains string 'October' return 'Happy Halloween' else 'Have a great day!' 
 - Do not use variable to store result

*/

// Approach 1
function holidays(arr) {
  let element;
  let doesItExist = false;

  for (let i = 0; i < arr.length; i++) {
    element = arr[i];

    // If array contains string 'October' return 'Happy Halloween' else 'Have a great day!'
    // It will need a dependency factor, doesItExist true or false.
    if (element === "October") {
      doesItExist = true;
    } else {
      doesItExist = false;
    }
  }

  return doesItExist ? "Happy Halloween" : "Have a great day!";
}

//Approach 2
function holidays(arr) {}

// Uncomment these to check your work!
const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"
