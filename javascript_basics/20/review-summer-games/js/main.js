//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

const numbers = [22, 35, 16, 18, 3, 1];

function arrayMultiply(arr) {
  let product = 1;
  arr.forEach( (num) => product *= num);
  alert(product);
}

arrayMultiply(numbers)