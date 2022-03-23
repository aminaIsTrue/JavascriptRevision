'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    //not a guess
    if (!guess) {
      document.querySelector('.message').textContent = 'Not Valid guess :)';
    }
    //guess right
    else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'You guessed right :)';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
    //guess less
    else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Guess too low! :)';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //guess high
    else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Guess too hight! :)';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent =
      'you exceeded the number of tries!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
