const guess = document.getElementById("guess")
guess.oninput = function() {enableClearButton()};

const clearButton = document.getElementById("clearButton")
clearButton.onclick = function() {clearGuessField()};

const guessButton = document.getElementById("guessButton");
guessButton.onclick = function() {checkGuess()};

const gameOutput = document.getElementById("gameOutput");

function enableClearButton() {
  let button = document.getElementById("clearButton");
  button.className = "enabled-button";
};

function clearGuessField() {
  document.getElementById("guess").value = "";
  clearButton.className = "disabled-button";
};

function randNum(start, end) {
  num = Math.floor((Math.random() * end) + start);
  return num;
};


const number = randNum(1, 100);
console.log(number);

function overUnder(playerGuess) {
  if ( playerGuess > number) {
    return "That is too high"
  } else {
    return "That is too low"
  }
};

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  if ( guess === number ) {
    document.getElementById("gameOutput").innerHTML = `
      <p>Your last guess was</p>
      <h1>${guess}</h1>
      <p>BOOM!</p>`
  } else {
    document.getElementById("gameOutput").innerHTML = `
    <p>Your last guess was</p>
    <h1>${guess}</h1>
    <p>${overUnder(guess)}</p>`
  }
};