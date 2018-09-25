const guessField = document.getElementById("guess");
guessField.oninput = function() {enableButton("resetButton")
                                 enableButton("clearButton")};

const clearButton = document.getElementById("clearButton");
clearButton.onclick = function() {clearGuessField()};

const guessButton = document.getElementById("guessButton");
guessButton.onclick = function() {checkGuess(guess)};

const resetButton = document.getElementById("resetButton");
resetButton.onclick = function() {resetGame()};

const gameOutput = document.getElementById("gameOutput");

function enableButton(id) {
  let button = document.getElementById(id);
  button.className = "enabled-button";
};

function clearGuessField() {
  document.getElementById("guess").value = "";
  clearButton.className = "disabled-button";
};

function resetGame() {
  location.reload()
};

function randNum(start, end) {
  num = Math.floor((Math.random() * end) + start);
  return num;
};

const start = 1
const end = 100
const number = randNum(start, end);
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
      <h1 class="guess-text">${guess}</h1>
      <p>BOOM!</p>`
  } else if ( guess < start || guess > end ) {
    alert("That guess is outside the range of possible answers!")
  } else {
    document.getElementById("gameOutput").innerHTML = `
    <p class="game-text">Your last guess was</p>
    <h1 class="guess-text">${guess}</h1>
    <p class="game-text">${overUnder(guess)}</p>`
  }
};