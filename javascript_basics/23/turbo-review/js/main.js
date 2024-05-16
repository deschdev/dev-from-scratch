// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentance = "We are going to the store?"
if (sentance.includes("?")) {
  alert("The string is a question")
} else {
  console.log("the string is not a question")
}


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let dev = "I am looking for jr. dev positions";
const replace = dev.replaceAll("jr. dev", "software engineer");
console.log(replace)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  let hand = ["rock", "paper", "scissors"];
  let random = hand[Math.floor(Math.random() * hand.length)];
  return random;
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function winGame(choice) {
  const robot = rockPaperScissors();
  if (choice === "rock" && robot === "scissors" || choice === "paper" && robot === "rock" || choice === "scissors" && robot === "paper") {
    console.log("You win");
  } else if (choice === robot) {
    console.log("DRAW");
  } else {
    console.log("Robot won, you lose");
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr) {
  arr.forEach( choice => winGame(choice) );
}

playGameXTimes( ["rock", "paper", "scissors"] )