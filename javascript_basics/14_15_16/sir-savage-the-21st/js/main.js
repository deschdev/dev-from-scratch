//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function twentyOneLoop() {
  for (let i = 1; i < 22; i++) {
    console.log("21")
    const h2Handle = document.querySelector("#savageSays");
    h2Handle.innerText += " 21"
  }
}

twentyOneLoop()