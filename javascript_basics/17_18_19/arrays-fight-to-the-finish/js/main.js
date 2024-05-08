//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ["Scream", "Halloween", "Child's Play", "Hellraiser"];
function moviesh2Loop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    document.querySelector("h2").innerText += ` ${arr[i]},`;
  }
}

moviesh2Loop(movies)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const arrayOfNumbers = [33, 6, 7, 19, 2, 28, 5];
function numberLoop(arr) {
  arr.forEach((num, i) => {
    console.log(num += 3)
  })
}

numberLoop(arrayOfNumbers)

//Find the average of all the numbers from question three
let sum = 0
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}

console.log("The sum is", sum / arrayOfNumbers.length)