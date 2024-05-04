// *Variables*
// Declare a variable, assign it a value, and alert the value
const user = "Avery";
alert(user);
// Create a variable, divide it by 10, and console log the value
let number = 100;
number /= 10;
console.log(number)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function threeNumberMultiply(num1, num2, num3) {
  const product = num1 * num2 * num3;
  alert(product);
}

threeNumberMultiply(3, 7, 8);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoSubtractTwo(a, b, c, d) {
  const sum = a + b;
  const difference = c - d;
  const result = sum + difference;
  console.log(result);
}

addTwoSubtractTwo(3, 9, 1, 4);
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNumbers(num1, num2, num3) {
  const result = (100 + num1 - num2) / num3;
  
  if (result > 25) {
    console.log("WE HAVE A WINNA");
  }
  return result;
}

threeNumbers(100, 10, 7);
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function checkForWeekend() {
  const inputValue = document.querySelector("#day").value;
  if (inputValue === "Saturday".toLowerCase() || inputValue === "Sunday".toLowerCase()) {
    alert("WEEKEND!")
  } else if (inputValue === "Monday".toLowerCase() || inputValue === "Tuesday".toLowerCase() || inputValue === "Wednesday".toLowerCase() || inputValue === "Thursday".toLowerCase() || inputValue === "Friday".toLowerCase()) {
    alert("WEEK DAY");
  } else {
    alert("TRY AGAIN");
  }
}

document.querySelector("#submit").addEventListener("click", checkForWeekend);
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num) {
  for (let i = 3; i <= num; i += 3) {
    console.log(i)
  }
}

countByThree(69);