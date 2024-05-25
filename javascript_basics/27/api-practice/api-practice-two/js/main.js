//Example fetch using Digimon API
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase();
  const url = `https://digimon-api.vercel.app/api/digimon/name/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("img").src = data[0].img;
        document.querySelector("h2").innerText = `Name: ${data[0].name}`;
        document.querySelector("p").innerText = `Level: ${data[0].level}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

