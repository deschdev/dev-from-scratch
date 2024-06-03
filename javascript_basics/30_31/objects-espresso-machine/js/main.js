//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
  constructor(color, make, model, price) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
  }

  turnOn() {
    console.log("Good morning, would you like to make it a double today?");
  }
  steam() {
    console.log("Steaming your espresso froth now");
  }
  brew() {
    console.log("BREWING, please wait.");
  }
  
}

const cadyEspresso = new EspressoMachine("chrome", "mogooner", "X300", "$299.99");
cadyEspresso.turnOn();
cadyEspresso.steam();
cadyEspresso.brew();
console.log(cadyEspresso);
