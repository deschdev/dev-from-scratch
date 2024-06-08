//Create a stopwatch object that has four properties and three methods
const stopwatch = {
  color: "black",
  brand: "yoshiFlex",
  model: "TX002",
  price: 299.99,
  start: function() {
    console.log("starting")
  },
  pause: function() {
    console.log("paused");
  },
  reset: function() {
    console.log("the time has been reset");
  }
}

console.log(stopwatch);