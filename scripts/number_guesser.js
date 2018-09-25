// guessField = document.getElementById("guess").onInput = checkGuess;
const guess = document.getElementById("guess")
guess.oninput = function() {enableClearButton()};

const clearButton = document.getElementById("clearButton")
clearButton.onclick = function() {clearGuessField()};

const guessButton = document.getElementById("guessButton");
guessButton.onclick = function() {checkGuess()};

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

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  if ( guess === number ) {
    document.getElementById("game-output").innerHTML = "Nice!"
  } else {
    document.getElementById("game-output").innerHTML = "Nope..."
  }
  // debugger;
  console.log(guess);
};