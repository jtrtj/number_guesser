const startGame = document.getElementById("startGame");
// used const here because I don't expect this value to change

startGame.onclick = function() {setupGame()};
// creates an event listener for when user clicks on the start game button

function enableButton(id) {
  let button = document.getElementById(id);
  button.classList.remove("disabled-button");
  button.classList.add("enabled-button");
};
// function that toggles the class of the button passed in the parameters between disabled and enabled

function clearGuessField() {
  document.getElementById("guess").value = "";
  clearButton.classList.remove("enabled-button");
  clearButton.classList.add("disabled-button");
};
// funtion that clears the guess field when the clear button is pressed. Aslo toggles the clear button's class

function resetGame() {
  location.reload();
};
// function that refreshes the page when user clicks reset

function randNum(start, end) {
  num = Math.floor((Math.random() * end) + start);
  return num;
};
// function to generate a random number between a set range.

let number;
let start;
let end;
//set up varibales that may change throughout the course of the game

function setupGame() {
  start = document.getElementById("start").value;
  end = document.getElementById("end").value;
  number = randNum(start, end);
  createGame();
};
// function that sets the game variables according to what the user inputs in the set up phase. Then calls the method to build the html that runs the game.

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
  // function that replaces the initial set up inside of the html document with the fields and buttons needed to play the game

  const guessField = document.getElementById("guess");
  guessField.oninput = function() {enableButton("resetButton")
                                  enableButton("clearButton")};
  // set event listener for the guess field then enable the reset button and clear button only if the user has input something into the guess field

  const clearButton = document.getElementById("clearButton");
  clearButton.onclick = function() {clearGuessField()};
  // set event listener for the clear button and when it is clicked run the clear guess field function from above

  const guessButton = document.getElementById("guessButton");
  guessButton.onclick = function() {checkGuess()};
  // set event listener for the guess button to check if the guess matches the randomly generated number when it is clicked

  const resetButton = document.getElementById("resetButton");
  resetButton.onclick = function() {resetGame()};
  // set event listener for the reset button to reset the game upon click
};



function overUnder(playerGuess) {
  if ( playerGuess > number) {
    return "That is too high"
  } else {
    return "That is too low"
  };
};
// checks if the user's guess is over or under the random number 

function increaseDifficulty() {
  start = parseInt(start) - 10;
  end = parseInt(end) + 10;
  number = randNum(start, end);
};
// this function increases the difficulty after the user guesses the correct number. 
// It increases the range the random number can be generated within by adding 10 to it and subracting 10 from it.

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  // grabs the user's guess from the guess field
  if ( guess === number ) {
    // checks if the user's guess is equal to the random number
    increaseDifficulty();
    // if it is, it increases the difficulty of the game
    document.getElementById("gameOutput").innerHTML = `
      <p>Your last guess was</p>
      <a class="guess-text">${guess}</a>
      <p>BOOM!</p>
      <p>difficulty increased, range is now between ${start} & ${end}</p>`;
      // then it generates the html that lets the user know they won and the difficulty has been increased
  } else if ( guess < start || guess > end ) {
    alert("That guess is outside the range of possible answers!");
    // if the user guesses outside of the range of possibilities, it generates an alert to let them know.
  } else {
    // if the guess is not right but inside of the range, it tells them whether or not it is above or below the random number
    // using the above overUnder function.
    document.getElementById("gameOutput").innerHTML = `
    <p class="game-text">Your last guess was</p>
    <h1 class="guess-text">${guess}</h1>
    <p class="game-text">${overUnder(guess)}</p>`;
  }
};