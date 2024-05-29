//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  // Clear previous results
  document.querySelector('.classes').innerHTML = '';
  document.querySelector('.subclasses').innerHTML = '';
  document.querySelector('h2').innerText = '';
  document.querySelector('p').innerText = '';

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data);

       document.querySelector("h2").innerText = `Name: ${data.name}`;


       data.classes.forEach((cl) => {
        const listItem = document.createElement("li");
        listItem.textContent = cl.name;
        document.querySelector(".classes").appendChild(listItem);
       });

       data.subclasses.forEach((subclass) => {
        const listItem = document.createElement("li");
        listItem.textContent = subclass.name;
        document.querySelector(".subclasses").appendChild(listItem);
       });

       document.querySelector("p").innerText = `Description: ${data.desc}`;
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

