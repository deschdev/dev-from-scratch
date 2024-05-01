//Create a conditonal that checks their age
const age = 30;
//If under 16, tell them they can not drive
if (age < 16) {
  console.log("You cannot drive")
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
else if (age < 18) {
  console.log("You can't hate from outside the club, because you can't even get in!")
}
//If under 21, tell them they can not drink
else if (age < 21) {
  console.log("You cannot drink")
}
//If under 25, tell them they can not rent cars affordably
else if (age < 25) {
  console.log("You cannot rent cars affordably");
}
//If under 30, tell them they can not rent fancy cars affordably
else if (age < 30) {
  console.log("You cannot rent fancy cars");
}
//If under over 30, tell them there is nothing left to look forward too
else if (age >= 30) {
  console.log("There is nothing to look forward to...")
}

//--- Harder
//On click of the h1
const h1Handle = document.querySelector("h1");
h1Handle.addEventListener("click", valueToParagraph);
//Take the value from the input
//Place the result of the conditional in the paragraph

function valueToParagraph() {
  const inputValue = document.querySelector("#danceDanceRevolution").value;
  document.querySelector("p").innerText = inputValue;
}
