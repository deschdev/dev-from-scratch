//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const onlyEvensArray = (arr) => {
  let newArr = [];
  arr.forEach(even => {
    if (even % 2 === 0) {
      newArr.push(even);
    }
  })
  return newArr;
}

console.log(onlyEvensArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 20]))