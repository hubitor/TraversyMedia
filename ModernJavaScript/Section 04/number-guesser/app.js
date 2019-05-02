/* 
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain number of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lost
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min & max
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`);
  }

  // Check if won
  if (guess === winningNum) {
    // Disable Input
    guessInput.disabled = true;
    // Change border colo
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct!, YOU WIN!`, 'green');
  } else {
    // wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lost

      // Disable Input
      guessInput.disabled = true;
      // Change border colo
      guessInput.style.borderColor = 'red';
      // Set message
      setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
    } else {
      // Game continues

      // Change border colo
      guessInput.style.borderColor = 'red';

      // clear input
      guessInput.value = '';

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }

});

// Game over


// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}