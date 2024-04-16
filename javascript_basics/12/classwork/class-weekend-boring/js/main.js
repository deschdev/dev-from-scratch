document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if (day === "Tuesday".toLowerCase() || day === "Thursday".toLowerCase()) {
    document.querySelector("#placeToSee").innerText = "Class day baby!!";
  } else if (day === "Saturday".toLowerCase() || day === "Sunday".toLowerCase()) {
    document.querySelector("#placeToSee").innerText = "It's the weekend, but don't get got!";
  } else if (day === "") {
    document.querySelector("#placeToSee").innerText = "Please enter a value";
  } else {
    document.querySelector("#placeToSee").innerText = "Boring Day!";
  }

}
