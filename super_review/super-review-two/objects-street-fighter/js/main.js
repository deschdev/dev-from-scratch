//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Fighter(country, fightingStyle, age, name) {
  this.country = country;
  this.fightingStyle = fightingStyle;
  this.age = age;
  this.name = name;
  this.taunt = () => {
    console.log("taunt input")
  },
  this.finisher = () => {
    console.log("finisher input")
  },
  this.block = () => {
    console.log("blocked attack")
  }
}

const ryu = new Fighter("Japan", "karate", "27", "Ryu");
console.log(ryu);
ryu.finisher();
ryu.block();
ryu.taunt();

const chunli = new Fighter("China", "taekwondo", "25", "Chun-li");
console.log(chunli);
chunli.finisher();
chunli.block();
chunli.taunt();