// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favoriteDrink = "soda";
favoriteDrink = "water";
console.log(favoriteDrink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const stringOfApple = "banana apple pear";
// if (stringOfApple.indexOf("apple") > -1) {
//   console.log(true);
// }
if (stringOfApple.search("apple") !== -1) {
  console.log("yes")
} else {
  console.log("no")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let hand = ["rock", "paper", "scissors"];
    let random = hand[Math.floor(Math.random() * hand.length)];
    return random;
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
  let robotChoice = rockPaperScissors();

  if (playerChoice === "rock" && robotChoice === "scissors"
      || playerChoice === "paper" && robotChoice === "rock"
      || playerChoice === "scissors" && robotChoice === "paper"
    ) {
      console.log("You won!");
  } else if (playerChoice === robotChoice) {
    console.log("You tied!");
  } else {
    console.log("You lose");
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr) {
  arr.forEach( choice => checkWin(choice) );
}

playGameXTimes( ["rock", "paper", "scissors"] )