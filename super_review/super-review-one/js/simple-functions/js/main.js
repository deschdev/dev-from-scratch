//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractAlert(num1, num2) {
  const result = num1 - num2;
  alert(result);
}
subtractAlert(10, 5);
//create a function that divides three numbers and console logs the quotient
function dividedQuotient(num3, num4, num5) {
  const result = num3 / num4 / num5;
  console.log(result);
}
dividedQuotient(100, 2, 3)

//create a function that multiplys three numbers and returns the product
function multiplyByThree(num6, num7, num8) {
  const result = num6 * num7 * num8;
  return result;
} 
console.log(multiplyByThree(3, 4, 5))
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainder(a, b, c) {
  const sum = a + b;
  const result = (sum) % c;
  console.log(result);
  return result;
}
remainder(3, 3, 3)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNumbers(e, f, g, h) {
  const product = e * f;
  if (product > 100) {
    let sum = g + h;
    console.log("Here is the sum: ", sum);
  } else if (product < 100) {
    let difference = g - h;
    console.log("here is the difference: ", difference)
  } else if (product === 100) {
    const product = (e * f * g) % h;
    alert(product);
  }
}

fourNumbers(50, 2, 3, 4)