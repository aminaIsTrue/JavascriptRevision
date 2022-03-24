'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
function setTextContent(className, textConent) {
  document.querySelector(className).textContent = textConent;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    //not a guess
    if (!guess) {
      // document.querySelector('.message').textContent = 'Not Valid guess :)';
      setTextContent('.message', 'Not a Valid guess!');
    }
    //exact guess
    else if (guess === secretNumber) {
      setTextContent('.message', 'You guessed right :)');
      setTextContent('.number', secretNumber);
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highscore) {
        highscore = score;
        setTextContent('.highscore', highscore);
      }
    }
    //guess different than the secret number
    else if (guess !== secretNumber) {
      setTextContent(
        '.message',
        guess > secretNumber ? 'Too heigh..!' : 'Too low..!'
      );
      score--;
      setTextContent('.score', score);
    }
  } else {
    setTextContent('.message', 'you exceeded the number of tries!');
    score = 0;
    setTextContent('.score', score);
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  setTextContent('.message', 'Start guessing...');
  setTextContent('.score', score);
  setTextContent('.number', '?');
  setTextContent('.guess', '');
  document.querySelector('body').style.backgroundColor = '#222';
});
