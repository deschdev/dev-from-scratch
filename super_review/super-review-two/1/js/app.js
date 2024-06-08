/* 
  Q: what is a program? 
  A: A program is a set of instructions that you write to tell a computer what to do.

  Q: what is programming? 
  A: Programming is the task of writing those instructions in a language that the computer can understand.
*/

/* 
  DIFFERENT SYNTAX IN Javascript
  <> . [] {} ? : ; ' " || - () * && $ # ! + = === `
  camelCase should be used throughout javascript

  Q: What is syntax? 
  A: "Spelling and grammer" rules of a programming language.
*/

/* 
  Q: What is a variable? 
  A: A container for storing infromation.

  Q: What are three ways you can store varibales?
  A: const, let, and var

  Q: Which of the three ways to store variables should now be avoided thanks to ES6?
  A: var

  Q: What are the eight different data types used in javascript?
  A: strings, numbers, bigint, booleans, undefined, null, symbol, object
  Ex:

  // Numbers:
  let length = 16;
  let weight = 7.5;

  // Strings:
  let color = "Yellow";
  let lastName = "Johnson";

  // Booleans
  let x = true;
  let y = false;

  // Object:
  const person = {firstName:"John", lastName:"Doe"};

  // Array object:
  const cars = ["Saab", "Volvo", "BMW"];

  // Date object:
  const date = new Date("2022-03-25");
*/

/* 
  Q: How can you escape double or single quotes in a string? 
  A: "They \"purchased\" it" OR 'It\'s beginning to look like christmas'
*/

/* 
  Q: What arithmetic operators are used in javascript?
  A: + : Addition
     - : Subtraction
     * : Multiplication
     / : Division
     % : Modulus (check for remainder) HINT: Always use to check if a number is even or odd
*/

/*------------------
VARIABLE FUN TIME
------------------*/

//--- Easy
//create a variable and assign it a number
let vftNum = 15;
//minus 10 from that number
vftNum -= 10;
//print that number to the console
console.log(vftNum);

//--- Medium
//create a variable that holds a value from the input
// let vftInput = Number(document.querySelector("#vftInput").value);
// add 25 to that number
// vftInput += 25;
// alert that number
// alert(vftInput);

//--- Hard
//create a variable that holds the h1
const vftH1 = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables

const vftSum = () => {
  let vftInput = Number(document.querySelector("#vftInput").value);
  vftInput += 25;
  let sum = vftNum + vftInput;
  console.log(sum)
  return sum;
}

vftH1.addEventListener("click", vftSum);


/* 
  Q: What are the differences between =, ==, and ===
  A: = is an assignment
     == is value comparison
     === is value and type
*/

/* 
  Q: How character do we use for NOT equal to something
  A: ! : the bang character
*/

/* 
  Q: What are some different ways we can use conditionals
  A: if / else if / else
  Ex: 
  const pizza = "Dominos"
  if (pizza === "Papa Johns") {
    console.log("scram!")
  } else if (pizza === "Dominos") {
    console.log("All aboard to flavor town") 
  } else {
    console.log("What are you even doing with your life")
  }

     switch : switch()
     Ex:
     let specialDay = "saturday";
     switch(specialDay) {
      case "monday": {
        console.log("Ugh the start of the work week")
        break;
      } 
      case "wednesday": {
        console.log("humpday")
        break;
      }
      case "saturday": {
        console.log("SPEACIAL DAY HAS ARRIVED!")
      } 
      default: {
        console.log("NOT INTERESTED IN THOSE DAYS OH AT ALL")
        break;
      }
     }
     ternary operator :  condition ? expectedResultIfTrue : expectedResultIfFalse
*/

/*-------------- 
  AGE CHECKER 
--------------*/
//Create a conditonal that checks their age
function checkAge() {
  let age = Number(document.querySelector("#ageChecker").value);
  let para = document.querySelector(".ageCheckText");
  //If under 16, tell them they can not drive
  if (age < 16) {
    para.innerText = "You cannot drive";
  } 
  //If under 18, tell them they can't hate from outside the club, because they can't even get in
  else if (age < 18) {
    para.innerText = "You can't hate from outside of the club, because you can't even get in";
  }
  //If under 21, tell them they can not drink
  else if (age < 21) {
    para.innerText = "You're too young to drink";
  }
  //If under 25, tell them they can not rent cars affordably
  else if (age < 25) {
    para.innerText = "You cannot rent cars affordably";
  } 
  //If under 30, tell them they can not rent fancy cars affordably
  else if (age < 30) {
    para.innerText = "You're too young to rent fancy cars!";
  }
  //If under over 30, tell them there is nothing left to look forward too
 else if (age > 30) {
  para.innerText = "You have nothing else to look forward to aside from running for presidency";
 }
}

//--- Harder
//On click of the h2
const h2Handle = document.querySelector("#ageHandleClick");
//Take the value from the input
//Place the result of the conditional in the paragraph

h2Handle.addEventListener("click", checkAge);

/* 
  Q: What are functions?
  A: A simple set of instructions. They're resusable, functions should only perform one action as best practice, and they're the basic building block of a program.
*/

/*----------------- 
  SIMPLE FUNCTIONS
-----------------*/

//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwo(num1, num2) {
  const difference = num1 - num2;
  alert(difference);
}

// subtractTwo(15, 5);

//create a function that divides three numbers and console logs the quotient
function divideThree(num3, num4, num5) {
  const quotient = num3 / num4 / num5;
  console.log(quotient);
}

divideThree(10, 2, 5);
//create a function that multiplys three numbers and returns the product
function multiplyThree(num6, num7, num8) {
  const product = num6 * num7 * num8;
  return product;
}

console.log(multiplyThree(3, 3, 3));
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function threeNumbers(num9, num10, num11) {
  const sum = num9 + num10;
  return sum % num11;
}

console.log(threeNumbers(44, 45, 4))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNumbers(num12, num13, num14, num15) {
  const product = num12 * num13;
  if (product > 100) {
    const sum = num14 + num15;
    console.log(sum);
  } else if (product < 100) {
    const difference = num14 - num15;
    console.log(difference)
  } else {
    alert((num12 * num13 * num14) % num15);
  }
}

fourNumbers(2, 15, 23, 27);

/*----------------- 
  TEMERATURE CONVERTER
-----------------*/

//Write your pseduo code first! 

// convert a value from celcius to farenheit 
// 0 -> 32
/* 
  need the value that is in celcius
  convert from celcius to farenheit
  show it
*/

const temperatureConverter = () => {
  let temp = Number(document.querySelector("#cels").value);
  temp = temp * 1.8 + 32;

  let tempH2 = document.querySelector("#tempOutput");
  tempH2.innerText = temp;
}

document.querySelector("#calc").addEventListener("click", temperatureConverter);

/*------------ 

BACHELOR CODE

------------*/

// 1: Final Rose

const hide = () => {
  document.querySelector("#claire").style.display = "none";
  document.querySelector("#sharleen").style.display = "none";
}

document.querySelector("#finalRose").addEventListener("click", hide);

// 2: Who should have won

const andi = document.querySelector("#andi2");
const claire = document.querySelector("#claire2");
const sharleen = document.querySelector("#sharleen2"); 

const andiNext = () => {
  claire.classList.add("hidden");
  sharleen.classList.add("hidden");
  andi.classList.toggle("hidden");
}

const claireNext = () => {
  andi.classList.add("hidden");
  sharleen.classList.add("hidden");
  claire.classList.toggle("hidden");
}

const sharleenNext = () => {
  andi.classList.add("hidden");
  claire.classList.add("hidden");
  sharleen.classList.toggle("hidden");
}

document.querySelector("#andiNext").addEventListener("click", andiNext );
document.querySelector("#claireNext").addEventListener("click", claireNext );
document.querySelector("#sharleenNext").addEventListener("click", sharleenNext );

// 2: Final rose part two
const contestants = document.querySelectorAll(".contestant");

const checkForRose = (click) => {
  if (click.target.classList.contains("rose")) {
    document.querySelector("#nikki3").classList.toggle("hidden");
  } else {
    alert("WRONG!");
  }
}


Array.from(contestants).forEach(element => element.addEventListener("click", checkForRose));

/* 
  Q: What are loops?
  A: Repeat an action some number of times
*/

/* 
  Q: What are the three main types of loops in Javascript?
  A: 

  FOR
  Ex:
  for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
    // do stuff
  }

  for (let i = 1; i < 5; i++) {
    console.log(i)
  }

  WHILE
  Ex:

  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }

*/

/*------------- 
  SAVAGE LOOP
--------------*/

//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

const printTwentyOne = () => {
  for (let i = 1; i <= 21; i++) {
    console.log("21");
    document.querySelector("#savageSays").innerText += " 21";
  }
}

printTwentyOne()