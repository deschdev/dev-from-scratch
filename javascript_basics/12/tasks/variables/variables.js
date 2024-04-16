/* 
  A: Working with Variables 
*/

// 1. Declare two varibles
let admin;
let name;
// 2. Assign the value "John" to name
name = "John";
// 3. Copy the value from name to admin
admin = name;
// 4. Show the value of admin using alert (must output "John")
alert( admin );

/* 
  B: Giving the right name
*/

// 1. create a varible with the name of our planet. How would you name such a variable?
const ourPlanet = "Earth";
// 2. Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentUser = "Jerick";

/* 
  C: Examine the following code:

  const birthday = '18.04.1982';
  const age = someCode(birthday);

  Here we have a constant birthday for the date, and also the age constant.

  The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

  Would it be right to use upper case for birthday? For age? Or even for both?

  My answer - birthday is known prior to execution, so yes that can be captialized,
  AGE - however is being evaluated in run-time. This should be lowercase
*/