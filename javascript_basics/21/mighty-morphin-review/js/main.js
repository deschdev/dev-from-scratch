// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favoriteHoliday;
favoriteHoliday = "Halloween".toUpperCase();
console.log(favoriteHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "Bing";
alert(str.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNumbers(num1, num2, num3, num4, num5) {
  const difference = 100 - (num1 + num2 + num3 + num4 + num5);
  alert(Math.abs(difference));
}

fiveNumbers(1, 2, 3, 4, 5)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNumbersHighestAndLowest(num6, num7, num8) {
  const max = Math.max(num6, num7, num8);
  const min = Math.min(num6, num7, num8);
  console.log(`The lowest num is ${min} amd the highest num is ${max}.`)
}

threeNumbersHighestAndLowest(4, 18, 19);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const headsOrTails = _ => Math.random() < .5 ? "heads" : "tails";

// console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipACoin(num) {
  for ( let i = 1; i <= num; i++) {
    let result = headsOrTails();
    console.log(result);
  }
}

flipACoin(10)