function Inventory(item, price) {
  // add code here
  this[item] = {
    price,
    quantity: 1,
  };
}

Inventory.prototype.addItem = function (item, price) {
  if (this[item]) {
    this[item].price = price;
    this[item].quantity++;
  } else {
    this[item] = {
      price,
      quantity: 0,
    };
  }
};

Inventory.prototype.checkItem = function (item, price) {
  if (this[item]) {
    // console.log(this[item]);
  } else {
    console.log("Item is not in inventory");
  }
};

Inventory.prototype.deleteItem = function (item) {
  if (this[item]) {
    delete this[item];
    console.log("Deleted");
  } else {
    console.log("Nothing to delete");
  }
};

const myInventory = new Inventory("cucumber", 2);

// Uncomment these lines to check your work!
myInventory.addItem("carrot", 1);
console.log(myInventory.checkItem("cucumber")); // Logs: { price: 2, quantity: 1 }
// myInventory.addItem("cucumber", 3);
// console.log(myInventory.deleteItem("carrot")); // Logs: 'Deleted'
// console.log(myInventory.deleteItem("carrot")); // Logs: 'Nothing to delete'
// console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
// console.log(myInventory.checkItem("radish")); // Logs: 'Item is not in inventory'
