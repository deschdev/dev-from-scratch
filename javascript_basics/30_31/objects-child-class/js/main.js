//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
  constructor(name) {
    this._name = name;
  }
  // somewhat private
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this.name} made a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed;
  }
}

const renly = new Dog("Renly", "Catahoula")
console.log(renly)
renly.speak();

class Cat extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} let out two meows`)
  }
}

const catkeisha= new Cat("Catkeisha", "Mainecoone");
catkeisha.speak();