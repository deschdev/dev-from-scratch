//Create a stopwatch object that has four properties and three methods
const stopwatch = {
  color: "blue",
  brand: "Tama",
  price: "456.99",
  time: 0,
  stop() {
    console.log("Stopped");
  },
  start() {
    time++;
  },
  reset() {
    time = 0;
  }
}