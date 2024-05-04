//Write your pseduo code first! 
// convert a value from celcius to farenheit 

// 0 -> 32
/* 
  need the value that is in celcius
  convert from celcius to farenheit
  show it
*/

document.querySelector("#calc").addEventListener("click", weatherConvert);

function weatherConvert() {
  let temp = document.querySelector("#cels").value;
  temp = temp * 9 / 5 + 32

  document.querySelector("#tempOutput").innerText = `${temp} F`;
}