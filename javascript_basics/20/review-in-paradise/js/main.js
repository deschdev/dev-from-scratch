// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = "sushi";
favoriteFood = "Mexican"
alert(favoriteFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const dog = "Renly";
alert(dog.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNumbersDivideAndMultiply(num1, num2, num3) {
  const product = (num1 / num2) * num3;
  alert(product);
}

threeNumbersDivideAndMultiply(3,3,7);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubedNumber(num4) {
  console.log(Math.cbrt(num4))
}

cubedNumber(14);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthConditional(month) {
  if (month === "June".toLowerCase() || month === "July".toLowerCase() || month === "August".toLowerCase()) {
    alert("YAY!");
  } else if (month === "January".toLowerCase() || month === "February".toLowerCase() || month === "March".toLowerCase() || month === "April".toLowerCase() || month === "May".toLowerCase() || month === "September".toLowerCase() || month === "October".toLowerCase() || month === "November".toLowerCase() || month === "December".toLowerCase()) {
    alert("BOOO!");
  }
}

monthConditional("july");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function numberLoop(num5) {
  for (let i = 0; i <= num5; i++) {
    console.log(i)
    if (i % 5 === 0) {
      console.log("skip")
    } else {
      console.log(i)
    }
  }
}

numberLoop(51);