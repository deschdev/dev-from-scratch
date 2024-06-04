// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 


class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }
  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }
  sayHi() {
    console.log(`hi`)
  }
}

class Front extends Contractor {
  constructor(name, role, stack) {
    super(name, role)
    this._stack = stack;
  }
  get stack() {
    return this._stack;
  }
  sayHi() {
    super.sayHi()
    console.log(`Hi there. My name is ${this.name}. It's nice to meet you. My role with the 100Devs is ${this.role} and my tech is ${this.stack}.`)
  }
}

class Back extends Contractor {
  constructor(name, role, stack) {
    super(name, role)
    this._stack = stack;
  }
  get stack() {
    return this._stack;
  }
  sayHi() {
    super.sayHi()
    console.log(`Hi there. My name is ${this.name}. It's nice to meet you. My role with the 100Devs is ${this.role} and my tech is ${this.stack}.`)
  }
}

const norman = new Front("Norman", "Frontend Software Engineer", "React");
const prog = new Back("Zed", "Backend Software Engineer", "Node")

let agencyList = [norman, prog]

for (indiv of agencyList) {
  indiv.sayHi();
}
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
