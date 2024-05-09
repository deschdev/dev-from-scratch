// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

const numbers = [12, 31, 6, 43, 7];
function numberCheckResponse(num) {
  if (num[0] < num[num.length - 1]) {
    alert("Hi"); 
  } else if (num[0] > num[num.length -1]) {
    alert("Bye");
  } else if (num[0] === num[num.length -1]) {
    alert("We close in an hour")
  }
}

numberCheckResponse(numbers);