// *Variables*
// Create a variable and console log the value
let number = 10;
console.log(number);
// Create a variable, add 10 to it, and alert the value
let numberTwo = 0;
numberTwo += 10;
// alert(numberTwo)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subtractFour = (num1, num2, num3, num4) => {
  const difference = num1 - num2 - num3 - num4;
  alert(difference);
}

// subtractFour(12, 3, 4, 4);


// Create a function that divides one number by another and returns the remainder
const returnRemainder = (num5, num6) => {
  const remainder = num5 % num6;
  return remainder;
}

console.log(returnRemainder(10, 6));


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const jumanji = (num7, num8) => {
  const sum = num7 + num8;

  if (sum > 50) {
    alert("Jumanji")
  }
}

// jumanji(50, 2)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const divisibleByThree = (num9, num10, num11) => {
  const product = num9 * num10 * num11;
  if (product % 3 === 0) {
    alert("ZEBRA")
  }
}
// divisibleByThree(3, 3, 3);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
const wordAndNumber = (num, str) => {
  for (let i = 1; i <= num; i++) {
    console.log(str)
  }
}

wordAndNumber(10, "mamal")