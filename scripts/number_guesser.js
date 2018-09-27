const startGame = document.getElementById("startGame");
startGame.onclick = function() {setupGame()};

function enableButton(id) {
  let button = document.getElementById(id);
  button.classList.remove("disabled-button");
  button.classList.add("enabled-button");
};

function clearGuessField() {
  document.getElementById("guess").value = "";
  clearButton.classList.remove("enabled-button");
  clearButton.classList.add("disabled-button");
};

function resetGame() {
  location.reload();
};

function randNum(start, end) {
  num = Math.floor((Math.random() * end) + start);
  return num;
};

let number;
let start;
let end;

function setupGame() {
  start = document.getElementById("start").value;
  end = document.getElementById("end").value;
  number = randNum(start, end);
  createGame();
};

function createGame() {
  let game = document.getElementById("game");
  game.innerHTML = gameControls();
  function gameControls() {
    return `
  <h3>Try your best to guess the number:</h3>
  <input type="number" id="guess" class="range lrg-input" placeholder="Enter a guess between ${start} & ${end}"><br>
  <button class="enabled-button sml-btn" id="guessButton">Guess</button>
  <button class="disabled-button sml-btn" id="clearButton">Clear</button><br>
  <div id="gameOutput">
    
  </div><br>
  <button class="disabled-button lrg-btn" id="resetButton">Reset</button>`;
  };

  const guessField = document.getElementById("guess");
  guessField.oninput = function() {enableButton("resetButton")
                                  enableButton("clearButton")};

  const clearButton = document.getElementById("clearButton");
  clearButton.onclick = function() {clearGuessField()};

  const guessButton = document.getElementById("guessButton");
  guessButton.onclick = function() {checkGuess()};

  const resetButton = document.getElementById("resetButton");
  resetButton.onclick = function() {resetGame()};
};



function overUnder(playerGuess) {
  if ( playerGuess > number) {
    return "That is too high"
  } else {
    return "That is too low"
  };
};

function increaseDifficulty() {
  start = parseInt(start) - 10;
  end = parseInt(end) + 10;
  number = randNum(start, end);
};

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  if ( guess === number ) {
    increaseDifficulty();
    document.getElementById("gameOutput").innerHTML = `
      <p>Your last guess was</p>
      <a class="guess-text">${guess}</a>
      <p>BOOM!</p>
      <p>difficulty increased, range is now between ${start} & ${end}</p>`;
  } else if ( guess < start || guess > end ) {
    alert("That guess is outside the range of possible answers!");
  } else {
    document.getElementById("gameOutput").innerHTML = `
    <p class="game-text">Your last guess was</p>
    <h1 class="guess-text">${guess}</h1>
    <p class="game-text">${overUnder(guess)}</p>`;
  }
};