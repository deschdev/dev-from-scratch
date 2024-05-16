//Create a dog object that has four properties and three methods
const dog = {
    breed: "catahoula",
    name: "renly",
    age: 9,
    behavior: "lax",
    bark() {
        console.log("bark bark bark")
    },
    walk() {
        console.log("walking")
    },
    eat() {
        console.log("eat")
    },
    sniff() {
        console.log("sniff sniff sniff")
    }
}

console.log(dog.behavior)