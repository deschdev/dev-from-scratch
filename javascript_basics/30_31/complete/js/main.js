class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} made a sound`)
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} let out a bark`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name)
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} let out two meows`);
  }
}

const renly = new Dog("Renly", "Catahoula");
const loras = new Dog("Loras", "Catahoula");
const catkeisha = new Cat("Catkeisha", "Mainecoone");

let farm = [renly, loras, catkeisha];

for (domesticatedAnimal of farm) {
  domesticatedAnimal.speak();
  console.log(domesticatedAnimal.name);
  console.log(domesticatedAnimal.breed);
}

// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }    
// }
// class Cat extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }    
// }

// let simba = new Dog('Simba','Shepard')
// let machi = new Dog('The Machine','Pitbull')
// let salem = new Cat('Salem', 'American Shorthair')

// let farm = [simba,machi,salem]

// for( a of farm ){
//     a.speak()
// }