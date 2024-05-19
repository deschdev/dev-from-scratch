//Create a pizza constructor with 4 properties and 3 methods
function Pizza(toppings, cheese, sauce, crust) {
  this.toppings = toppings;
  this.cheese = cheese;
  this.sauce = sauce;
  this.crust = crust;
  this.isHot = function() {
    console.log("that is too hot! You gotta let that cool down, mate.")
  },
  this.deliveryTime = function() {
    console.log("this pizza is going to be delivered promptly. Trust and believe!")
  },
  this.delivery = function() {
    console.log("this is for a delivery")
  }
}

const classicPizza = new Pizza(["pepperoni", "onions", "garlic", "peppers"], "mozzarella", "medium", ["stuffed", "crispy"]);
console.log(classicPizza)