// *Variables*
// Create a variable and console log the value
let dog = "Renly";
console.log(dog);
// Create a variable, add 10 to it, and alert the value
let number = 10;
number += 10;
console.log(number);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function difference(a, b, c, d) {
  let result = a - b - c - d;
  alert(result);
}
difference(10, 2, 3, 1);
// Create a function that divides one number by another and returns the remainder
function remainder(e, f) {
  let result = e / f;
  return result;
}

console.log(remainder(8, 2));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanjiSum(g, h) {
  let sum = g + h;
  if (sum >= 50) {
    alert("JUMANJI")
  } else {
    console.log("The board forever closes its powers to you!")
  }
}

jumanjiSum(45, 5);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebraProduct(i, j, k) {
  let product = i * j * k;
  if (product % 3 === 0) {
    alert("ZEBRA")
  } else {
    console.log("Try again. The three numbers need to be divisible by three")
  }
}

zebraProduct(3, 3, 3);
zebraProduct(2, 1, 2);