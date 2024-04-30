//---Easy
//create a function that subtracts two numbers and alerts the difference
function difference(a, b) {
  const result = a - b;
  return result;
}

console.log(difference(4, 2))
//create a function that divides three numbers and console logs the quotient
function remainder(c, d, e) {
  const result = c / d / e;
  return result;
}
console.log(remainder(10, 2, 2))
//create a function that multiplys three numbers and returns the product
function product(f, g, h) {
  const result = f * g * h;
  return result;
}
console.log(product(3, 5, 9));
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function numberPrac(i, j, k) {
  let sum = i + j;
  let remainder = k / sum;
  return remainder;
}

console.log(numberPrac(10, 15, 145))

//---Hard
/* 
1. create a function that takes in 4 numbers. 
2. Multiply the first two numbers. 
3. If the product is greater than 100 add the sum of the last two numbers and console log the value. 
4. If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
5. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
*/

function fourNumberPrac(l, m, n, o) {
  let product = l * m;
  if (product > 100) {
    let sum = n + o;
    console.log(`Norman here is the sum as the ${product} is greater than 100: `, sum)
    return sum;
  } else if (product < 100) {
    let difference = n - o;
    console.log(`Norman here is the difference as the ${product} is less than 100: `, difference);
    return difference;
  } else if (product === 100) {
    let newProduct = l * m * n;
    alert(newProduct / o);
  }
}

fourNumberPrac(2, 50, 56, 8)