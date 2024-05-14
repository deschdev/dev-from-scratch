//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function CreateFighter(fighterName, fighterFightingStyle, fighterFinishingMove, fighterDestination ) {
  this.name = fighterName,
  this.fightingStyle = fighterFightingStyle,
  this.finisher = fighterFinishingMove,
  this.destination = fighterDestination,
  this.taunt = function() {
    console.log("laughs")
  },
  this.special = function() {
    console.log("enter a directional input")
  },
  this.handicap = function() {
    return false;
  }
}

const femaleOne = new CreateFighter("Chun-Li", "Taekwondo", "Hyakuretsukyaku", "Hong Kong, China" );

console.log(femaleOne)

const maleOne = new CreateFighter("Ken Masters", "Karate", "Shinryu Reppa", "USA");
console.log(maleOne)