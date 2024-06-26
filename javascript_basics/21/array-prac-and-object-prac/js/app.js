/* 13 Questions */


/*

1) FROM - TO CAMELCASE:

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Hint: use split to split the string into an array, transform it and join back.

*/

function camelize(str) {
  let stringSplit = str.split("-");
  let transformedWords = []
  stringSplit.forEach((word) => {
    let uppercase = word.charAt(0).toUpperCase() + word.slice(1);
    transformedWords.push(uppercase);
  });

  let camelCasedWords = transformedWords.join("");
  console.log(camelCasedWords);
}

camelize("blank-brazil-human");

/* 

2) FILTER RANGE: 

Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

*/

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let numbersTwo = [5, 3, 8, 1];
let filtered = filterRange(numbersTwo, 1, 4);
alert( filtered);
alert (numbersTwo);

/* 
3) FILTER RANGE: "IN PLACE":

Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

*/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value < a || value > b) {
      arr.splice(i, 1);
      i--
    }
  }
}

let numbersThree = [5, 3, 8, 1];

filterRangeInPlace(numbersThree, 1, 4); // removed the numbers except from 1 to 4

alert( numbersThree ); // [3, 1]

/* 
4) SORT IN DECREASING ORDER:

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10

*/

let numbersFour = [5, 2, 1, -10, 8];
numbersFour.sort((a, b) => a - b)
numbersFour.reverse();
alert(numbersFour);

/* 

5) COPY AND SORT ARRAY: 

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

*/

function copySorted(arr) {
  return arr.slice().sort();
}

let wordsFive = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(wordsFive);

alert( sorted ); // CSS, HTML, JavaScript
alert( wordsFive ); // HTML, JavaScript, CSS (no changes)

/* 

6) CREATE AND EXTENDABLE CALCULATOR:

Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

THEN
add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.

*/

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

/* 
7) MAP TO NAMES:

You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = YOUR CODE

alert( names ); // John, Pete, Mary

*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map((user) => ` ${user.name}`);

alert( names ); // John, Pete, Mary

/* 
8) MAP TO OBJECTS: 

You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = YOUR CODE

usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

*/

let johnTwo = { name: "John", surname: "Smith", id: 1 };
let peteTwo = { name: "Pete", surname: "Hunt", id: 2 };
let maryTwo = { name: "Mary", surname: "Key", id: 3 };

let usersTwo = [ johnTwo, peteTwo, maryTwo ];

let usersMapped = usersTwo.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

/* 
9) SORT USERS BY AGE:

Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

*/

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let johnThree = { name: "John", age: 25 };
let peteThree = { name: "Pete", age: 30 };
let maryThree = { name: "Mary", age: 28 };

let arrNine = [ peteThree, johnThree, maryThree ];

sortByAge(arrNine);

// now sorted is: [john, mary, pete]
alert(arrNine[0].name); // John
alert(arrNine[1].name); // Mary
alert(arrNine[2].name); // Pete

/* 

10) GET AVERAGE AGE: 
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let johnFour = { name: "John", age: 25 };
let peteFour = { name: "Pete", age: 30 };
let maryFour = { name: "Mary", age: 29 };

let arrTenTwo = [ johnFour, peteFour, maryFour ];

alert( getAverageAge(arrTenTwo) ); // 28

/* 

11) FILTER UNIQUE ARRAY MEMBERS
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  YOUR CODE
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/

function uniqueStr(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( uniqueStr(strings) ); // Hare, Krishna, :-O

/* 

12) CREATE KEYED OBJECT FROM ARRAY

Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);


// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution.

Open a sandbox with tests.

*/

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let usersTwelve = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(usersTwelve);

/* 
13) SHUFFLE AN ARRAY

Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.



*/


function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

let arrTen = [1, 2, 3];
shuffle(arrTen);
alert(arrTen);

/* 
MUSKETEERS
Write a program that:

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.
*/

const musketeers = ["Athos", "Porthos", "Aramis"];
for (let i = 0; i < musketeers.length; i++) {
  musketeers[i];
  console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
musketeers.forEach((member) => {
  if (member === "Aramis") {
    musketeers.splice(2, 1)
    console.log(musketeers)
  }
});

for (const teamMember of musketeers ) {
  console.log(teamMember)
}

/* 
SUM OF VALUES:
Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];
*/

const sum = [3, 11, 7, 2, 9, 10].reduce((a, b) => a + b, 0);
console.log(sum);

/* 
ARRAY MAXIMUM:
Write a program that creates the following array, then calculates and shows the array's maximum value.
const values = [3, 11, 7, 2, 9, 10];
*/
const values = [3, 11, 7, 2, 9, 10, 14]
function largestNum(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr[arr.length - 1])
  return arr[arr.length - 1]
}
largestNum(values);

/* 
LIST OF WORDS:

Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

*/


function stopWhenYouSeeStop() {
  let newArray = [];

  while(1) {
    let word = prompt("Enter a word");
    if (word == "stop") break;
    newArray.push(word);
  }
  console.log(newArray)
}

// stopWhenYouSeeStop()