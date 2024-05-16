//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function Skater(name, trick, score, finisher) {
    this.name = name
    this.trick = trick
    this.score = score
    this.finisher = finisher
    this.skate = function(){
        console.log("skate")
    }
    this.move = function(){
        console.log("moving")
    }
    this.collect = function(){
        console.log("collect")
    }
}

const skateManOne = new Skater("Tony Hawk", "360 Nosedive Flip", 678888, "Talon Grab");
console.log(skateManOne);
console.log(skateManOne.skate)

const skateWomanOne = new Skater("Souxie Lee", "Cigg Neft", 56777, "Juul-ia Childs");
console.log(skateWomanOne);
console.log(skateWomanOne.collect)