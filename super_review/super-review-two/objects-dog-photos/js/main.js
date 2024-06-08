//Get a dog photo from the dog.ceo api and place the photo in the DOM
const url = "https://dog.ceo/api/breeds/image/random";

fetch(url) 
  .then (res => res.json())
  .then(data => {
    document.querySelector("img").src = data.message;
  })
  .catch(err => {
    console.error(`There has been an unexpected error: ${err}`)
  })
