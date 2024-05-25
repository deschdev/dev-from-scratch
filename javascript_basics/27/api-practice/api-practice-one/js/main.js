//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = "https://api.math.tools/numbers/nod";

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("span").innerText = data.contents.nod.numbers.number;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

