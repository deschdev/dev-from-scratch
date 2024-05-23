//Create a button that adds 1 to a botScore stored in localStorage 

// checking for localStorage item
if (!localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0)
}

// click event for the function addAnotherOne
document.querySelector('button').addEventListener('click', addAnotherOne)


// function to add one to the botScore
function addAnotherOne(){
  let botScoreValue = Number(localStorage.getItem("botScore"));
  botScoreValue += 1;
  localStorage.setItem("botScore", botScoreValue);
}


