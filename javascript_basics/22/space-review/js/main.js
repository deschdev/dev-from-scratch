//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbersArrayOne = [1, 2, 3, 4, 5];
const sum = numbersArrayOne.reduce( (a, b) => a + b, 0 );
alert(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const numbersArrayTwo = [2, 3, 4, 5, 6];
function numbersSquared(arr) {
  return arr.map((num) => num ** 2);
}
console.log(numbersSquared(numbersArrayTwo));
//Create a function that takes string
//Print the reverse of that string to the console
function stringReverse(str) {
  const splitStr = str.split("");
  const reversedStr = splitStr.reverse();
  const joinedStr = reversedStr.join("");
  console.log(joinedStr)
}

stringReverse("Tolken")
//Create a function that takes in a string
//Alert if the string is a palindrome or not

function checkPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i]; // forward character
    let y = str[j - i]; // backward character

    if (x != y) {
      return false; //return false if string is NOT palindrome
    }
  }
  return true // return true if string IS palindrome
}

function isPalindrome(str) {
  let answer = checkPalindrome(str);

  if (answer == true) {
    console.log(`The passed string "${str}" is a palindrome`);
  } else {
    console.log("passed string is not a palindrome");
  }
}

// let testCase = "moo1m";
let testCase = "buzub"
isPalindrome(testCase);