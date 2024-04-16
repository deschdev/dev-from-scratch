// plusThree
// plusNine
// subtractTwo
// subtractEight
// multiplyFour
// divideTwo
// modularTwo

document.getElementById("zero").addEventListener("click", revertToZero);
document.getElementById("plusThree").addEventListener("click", addThree);
document.getElementById("plusNine").addEventListener("click", addNine);
document.getElementById("subtractTwo").addEventListener("click", subtractTwo);
document.getElementById("subtractEight").addEventListener("click", subtractEight);
document.getElementById("multiplyFour").addEventListener("click", multiplyFour);
document.getElementById("divideTwo").addEventListener("click", divideByTwo);
document.getElementById("modularTwo").addEventListener("click", modularTwo);


const resultText = document.querySelector("#placeToPutResult");

let total = 0;

function revertToZero() {
  total = 0;
  resultText.innerText = total;
}

function addThree() {
  total = total + 3;
  resultText.innerText = total;
}

function addNine() {
  total = total + 9;
  resultText.innerText = total;
}

function subtractTwo() {
  total = total - 2;
  resultText.innerText = total;
}

function subtractEight() {
  total = total - 8;
  resultText.innerText = total;
}

function multiplyFour() {
  total = total * 4;
  resultText.innerText = total;
}

function divideByTwo() {
  total = total / 2;
  resultText.innerText = total;
}

function modularTwo() {
  total = total % 2;
  resultText.innerText = total;
}
