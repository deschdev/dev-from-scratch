// Create a pizza object that has four properties and three methods
const pizza = {};
pizza.sauce = "marinara";
pizza.cheese = "mozzarella";
pizza.protien = "pepperoni";
pizza.gluten = true;

pizza.hot = function() {
  console.log("Gotta let it cool down")
};


pizza.delivery = function() {
  console.log("This pizza is set to be delivered promptly!")
}

pizza.party = function() {
  console.log("We're going to need to make a lot more pizza");
}

console.log(pizza)