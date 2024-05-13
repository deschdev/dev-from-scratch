//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const shows = ["Baby Reindeer", "Three Body Problem", "Young Sheldon"];
shows.forEach((show, i) => console.log(show, i));
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numbers = [3, 4, 5, 6, 12];
let onlyEvens = arr => arr.filter(num => num % 2 === 0);
console.log(onlyEvens(numbers));
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const array = [15, 222, 17, 19, 21, 654, 99, 3, 8]
function sumOfNumbers(arr) {
  let sorted = arr.sort((a, b) => a - b);
  alert(sorted[1] + sorted[sorted .length -2]);
}

sumOfNumbers(array);