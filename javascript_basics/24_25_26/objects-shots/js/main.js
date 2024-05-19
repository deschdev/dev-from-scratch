//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getCocktail);

function getCocktail() {
  // <h2>Name</h2>
	// 	<img src="" alt="">
	// 	<h3>Instructions</h3>
  const inputValue = document.querySelector("input").value;
  const carousel = document.querySelector(".carousel");
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`;

  fetch(url)
  fetch(url)
  .then(res => res.json())
  .then(data => {
    const carousel = document.querySelector(".carousel");
    const template = document.querySelector(".carouselItem");
    let currentIndex = 0;

    // Remove all existing items in the carousel except the template
    carousel.innerHTML = '';
    carousel.appendChild(template);

    // Create and populate drink items
    const drinkItems = data.drinks.map(drink => {
      const drinkItem = template.cloneNode(true);
      drinkItem.style.display = 'none'; // Initially hide all items
      drinkItem.querySelector("h2").innerText = drink.strDrink;
      drinkItem.querySelector("img").src = drink.strDrinkThumb;
      drinkItem.querySelector("img").alt = drink.strDrink;
      drinkItem.querySelector("h3").innerText = drink.strInstructions;
      carousel.appendChild(drinkItem);
      return drinkItem;
    });

    // Function to show a specific drink by index
    function showDrink(index) {
      drinkItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
      });
    }

    // Initial display
    showDrink(currentIndex);

    // Event listeners for navigation buttons
    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : drinkItems.length - 1;
      showDrink(currentIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex < drinkItems.length - 1) ? currentIndex + 1 : 0;
      showDrink(currentIndex);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

}

