let deckId = "";

const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  deckId = data.deck_id;
})
.catch(err => {
    console.log(`error ${err}`)
});

document.querySelector('button').addEventListener('click', drawTwoCards)

function drawTwoCards(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // adding the card images
        document.querySelector("#playerOne").src = data.cards[0].image;
        document.querySelector("#playerTwo").src = data.cards[1].image;
        
        // creating variables for the card values
        let playerOneValue = convertToNumber(data.cards[0].value);
        let playerTwoValue = convertToNumber(data.cards[1].value);

        // check which player won
        if (playerOneValue > playerTwoValue) {
          document.querySelector("#cardValue").innerText = "Player 1 Wins!"
        } else if (playerOneValue < playerTwoValue) {
          document.querySelector("#cardValue").innerText = "Player 2 Wins!"
        } else {
          document.querySelector("#cardValue").innerText = "WAR!!"
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNumber(value) {
  switch(value) {
    case "ACE": {
      return 14;
      break;
    }
    case "KING": {
      return 13;
      break;
    }
    case "QUEEN": {
      return 12;
      break;
    }
    case "JACK": {
      return 11;
      break;
    }
    default: {
      console.log("That shouldn't be here...")
      break;
    }
  }
  return Number(value);
}
