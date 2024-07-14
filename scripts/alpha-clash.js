// ! callback function for the key up event listener
function callBackForKeyupEvent(event) {
  // ? the key that needs to be pressed
  const keyToPress = document
    .getElementById("current-alphabet")
    .innerText.toLowerCase();

  // ? to keep track of the key that has been pressed by the user
  const playerPressed = event.key;

  // ? End the game with escape key
  if (playerPressed === "Escape") {
    gameOver();
  }

  if (playerPressed === keyToPress) {
    // ? update score with correct key press
    const currentScoreElement =
      document.getElementById("current-score").innerText;
    const currentScore = parseInt(currentScoreElement);
    const newScore = currentScore + 1;

    // ? setting the new score in the display
    document.getElementById("current-score").innerText = newScore;

    // ? remove the background color of the previous key
    removeBackgroundColorById(keyToPress);
    continueGame();
  } else {
    // ? getting the current life
    const currentLife = parseInt(
      document.getElementById("current-life").innerText
    );

    // ? count of lives after making a mistake and if life is over then we show the score
    const newLife = currentLife - 1;
    if (newLife > 0) {
      document.getElementById("current-life").innerText = newLife;
    } else {
      gameOver();
    }
  }
}

// ! capture keyboard key press
addEventListener("keyup", callBackForKeyupEvent);

// ! function to indicate the game is over and show the score to user
function gameOver() {
  hideElementById("play-ground");
  showElementById("show-score");

  // ? update final score
  // * getting the final score
  const lastScore = document.getElementById("current-score").innerText;

  // * setting the final score
  document.getElementById("last-score").innerText = lastScore;

  // * clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet.toLowerCase());
}

// ! function to continue the game
function continueGame() {
  // ? Generate a random alphabet
  const alphabet = getRandomAlphabet();

  // ? set randomly generated alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet.toUpperCase();

  // ? Set highlighted letter background color
  addBackgroundColorById(alphabet);
}

// ! Function to get a random alphabet
function getRandomAlphabet() {
  // ? Create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //   ? Get a random index between 0-25
  const randomNumber = Math.round(Math.random() * 25);
  return alphabets[randomNumber];
}

// ! function to start the game when pressed on the home screen's play now button
function startPlay() {
  // ? Hiding the home screen
  hideElementById("home-screen");

  // ? showing the playground screen
  showElementById("play-ground");

  // ? hiding the score screen
  hideElementById("show-score");

  // ? reset score and life
  document.getElementById("current-life").innerText = 5;
  document.getElementById("current-score").innerText = 0;

  // ? Continuing the game
  continueGame();
}
