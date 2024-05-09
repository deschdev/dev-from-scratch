//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = []
function noMapNoFilter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(i);
      console.log(newArr.push(i));
    }
  }
  return newArr
}

noMapNoFilter(numbers);