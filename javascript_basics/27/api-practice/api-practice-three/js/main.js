//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = "https://v2.jokeapi.dev/joke/Any"

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("span").innerText = `Category: ${data.category}`
        document.querySelector("h2").innerText = data.setup;
        document.querySelector("p").innerText = data.delivery;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

