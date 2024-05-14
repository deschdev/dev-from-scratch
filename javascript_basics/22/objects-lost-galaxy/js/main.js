//Create a mouse object that has four properties and three methods
const mouse = {
  brand: "apple",
  color: "space-gray",
  shape: "oval",
  wireless: true,
  click() {
    console.log("the mouse has clicked");
  },
  scroll() {
    console.log("the mouse is scrolling")
  },
  touch() {
    console.log("the mouse has been touched with two fingers");
  }
}

console.log(mouse)