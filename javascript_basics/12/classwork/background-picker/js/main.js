// add another li for a new color
// recreate the functionality using onclick
// change the body background color

document.getElementById("purple").onclick = purple;
document.getElementById("green").onclick = green;
document.getElementById("blue").onclick = blue;
document.getElementById("yellow").onclick = yellow;

function purple() {
  document.body.style.backgroundColor = "purple";
  document.body.style.color = "white";
}

function green() {
  document.body.style.backgroundColor = "green";
  document.body.style.color = "white";
}

function blue() {
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "white";
}

function yellow() {
  document.body.style.backgroundColor = "yellow";
  document.body.style.color = "black";
}