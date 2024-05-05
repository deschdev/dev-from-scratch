//Create a conditonal that checks their age
function ageCheck() {
  let age = Number(document.querySelector("input").value);
  let para = document.querySelector("p")
  if (age < 16) {
    //If under 16, tell them they can not drive
    para.innerText = "You cannot drive";
  }
  //If under 18, tell them they can't hate from outside the club, because they can't even get in
  else if (age < 18) {
    para.innerText = "You cannot get into the club";
  }
  //If under 21, tell them they can not drink
  else if (age < 21) {
    para.innerText = "You cannot drink";
  }
  //If under 25, tell them they can not rent cars affordably
  else if (age < 25) {
    para.innerText = "You cannot rent cars affordably";
  }
  //If under 30, tell them they can not rent fancy cars affordably
  else if (age < 30) {
    para.innerText = "You cannot rent fancy cars";
  }
  //If under over 30, tell them there is nothing left to look forward too
  else if (age >= 30) {
    para.innerText = "There is nothing left to look forward to as an adult. Well accept maybe running for presidency...";
  }
}

//--- Harder
//On click of the h1
const h1Handle = document.querySelector("h1");
h1Handle.addEventListener("click", ageCheck)
//Take the value from the input
//Place the result of the conditional in the paragraph