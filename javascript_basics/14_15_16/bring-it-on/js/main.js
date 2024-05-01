// *Variables*
// Create a variable and console log the value
const user = "Norm";
console.log(user);
// Create a variable, add 10 to it, and alert the value
let addTen = "Dev100";
addTen += 10;
alert(addTen);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(a, b, c, d) {
  const result = a - b - c - d;
  alert(result);
  return result;
}

subtractFour(15, 2, 4, 7);
// Create a function that divides one number by another and returns the remainder
function remainder(e, f) {
  const result = e % f;
  return result;
}

console.log(remainder(10, 4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function alertJumanji(g, h) {
  const sum = g + h;
  if (sum > 50) {
    alert("Jumanji!")
  }
}

alertJumanji(50, 1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divisibleByThree(i, j, k) {
  const product = i * j * k;
  if (product % 3 === 0) {
    alert("ZEBRA!")
  }
}

divisibleByThree(3, 3, 3);
// divisibleByThree(2, 2, 2, 2);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNumber(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(`${word}`);
  }
}

wordAndNumber("Taco", 16)