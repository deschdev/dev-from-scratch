//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
  const poke1 = document.querySelector('#poke1').value;
  const poke2 = document.querySelector('#poke2').value;
  const url = `https://pokeapi.co/api/v2/pokemon/${poke1}`;
  const url2 = `https://pokeapi.co/api/v2/pokemon/${poke2}`;
  let pokeStore = [];
  let pokeImg = [];

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log("First data set", data);
    
      const typeListContainerOne = document.querySelector("#listOne");
      typeListContainerOne.innerHTML = "";

      const pokeTypeOne = data.types;
      pokeTypeOne.forEach((t) => {
        const listItem = document.createElement("li");
        listItem.textContent = t.type.name;
        typeListContainerOne.appendChild(listItem)
      });

      // adding the shiny sprite images
      pokeStore.push(data.types[0].type.name);
      pokeImg.push(data.sprites.front_shiny);
      
      fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log("Second data set", data);
          
          const typeListContainerTwo = document.querySelector("#listTwo");
          typeListContainerTwo.innerHTML = "";

          const pokeTypeTwo = data.types;
          pokeTypeTwo.forEach((t) => {
            const listItem = document.createElement("li");
            listItem.textContent = t.type.name;
            typeListContainerTwo.appendChild(listItem)
          });

          pokeStore.push(data.types[0].type.name);
          pokeImg.push(data.sprites.front_shiny);
      
          if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
            document.querySelector('#pokeImg1').src = pokeImg[0];
            document.querySelector('#pokeImg2').src = pokeImg[1];
            document.querySelector('h2').innerText = " 2x > ";
          }
        })
        // second catch error
      .catch(err => {
          console.log(`error ${err}`);
      });

    })
    // first catch error
  .catch(err => {
      console.log(`error ${err}`);
  });



      
}