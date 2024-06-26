// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const drinkWater = true;
alert(drinkWater)

// Declare a variable, reassign it to your favorite color, and console log the value
const favoriteColor = "purple";
console.log(favoriteColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNumbers(num1, num2, num3, num4) {
  const result = (num1 + num2 + num3) / num4;
  console.log(result);
  return result;
}

fourNumbers(3, 3, 3, 3);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNumbers(num5, num6) {
  console.log(Math.pow(num5, num6));
}

twoNumbers(4, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function booleanStr(bool, str) {
  if ( bool == true ) {
    alert(str)
  } else if (bool == false) {
    console.log(str)
  }
}

booleanStr(true, "Tiger");

//*Loops*

/*Create a function that takes in a number.
Console log all values from 1 to that number, but 
if the number is divisible by 3 log "fizz" instead of that number, 
if the number is divisible by 5 log "buzz" instead of the number, 
and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
*/

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0){
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(25);