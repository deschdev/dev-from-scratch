//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbersOne = [1, 2, 3, 4, 5];
const sum = numbersOne.reduce((a, b) => a + b);
// alert(sum); 
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let numbersTwo = [6, 7, 8, 9, 10];
function squared(arr) {
   const sq = arr.map((num) => num ** 2);
   return sq;
}

console.log(squared(numbersTwo));
//Create a function that takes string
//Print the reverse of that string to the console
let soonToBeReversedString = "polkadot";
function reverse(str) {
    const split = str.split("");
    const reverse = split.reverse();
    const joinStr = reverse.join("");
    console.log(joinStr);
}
reverse(soonToBeReversedString);
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindrome = str => alert(str === str.split("").reverse().join(""));
palindrome("racecar")