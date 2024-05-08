//Create an array of movies with at least three movies.
const moviesArray = ["The Green Mile", "Teeth", "50 First Dates"];
console.log("The array is: ", moviesArray);
//Using the array from above, store the first movie in a variable
const movieOne = moviesArray[0];
console.log("The first Movie is: ", movieOne);
//Get the length of the original array and store it in a new variable
const movieArrayLength = moviesArray.length;
console.log("The movie array length is: ", movieArrayLength);
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

const lastMovieElement = moviesArray[moviesArray.length -1];
console.log(lastMovieElement);

// forEach grabs the element value, index, and the array itself
moviesArray.forEach((x, i, a) => console.log(x, i, a))
