'use strict';
//select HTML elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let ActivePlayerEl;
let NonActivePlayerEl;
//starting conditions
let score = [0, 0];
let currentScore = 0;
let gameState = true;
function newGame() {
  score = [0, 0];
  currentScore = 0;
  gameState = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
}
newGame();

function switchPlayer() {
  //active player becomes inactive
  ActivePlayerEl.classList.toggle('player--active');
  //non-active player become active
  NonActivePlayerEl.classList.toggle('player--active');
}

//Rolling the dice
btnRoll.addEventListener('click', function () {
  if (gameState) {
    //generate a random dice
    const rollResult = Math.trunc(Math.random() * 6) + 1;
    //display the roll image (the right one)
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${rollResult}.png`;
    //select the active and inactive players
    const section = document.querySelectorAll('section');

    for (let i = 0; i < section.length; i++) {
      if (section[i].classList.contains('player--active')) {
        ActivePlayerEl = section[i];
      } else {
        NonActivePlayerEl = section[i];
      }
    }
    //display roll result
    if (rollResult !== 1) {
      currentScore += rollResult;
      ActivePlayerEl.querySelector('.current-score').textContent = currentScore;
    } else {
      //initialize the current score of the active player
      currentScore = 0;
      ActivePlayerEl.querySelector('.current-score').textContent = currentScore;
      //active player becomes inactive
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (gameState) {
    const playerName = ActivePlayerEl.querySelector('.name');
    const scoreEl = ActivePlayerEl.querySelector('.score');
    let activeCurrentScore =
      ActivePlayerEl.querySelector('.current-score').textContent;

    if (playerName.textContent === 'Player 1') {
      score[0] += Number(activeCurrentScore);
      scoreEl.textContent = score[0];
    } else {
      score[1] += Number(activeCurrentScore);
      scoreEl.textContent = score[1];
    }

    if (Number(scoreEl.textContent) >= 10) {
      ActivePlayerEl.classList.add('player--winner');
      diceEl.classList.add('hidden');
      gameState = false;
    } else {
      currentScore = 0;
      activeCurrentScore = currentScore;
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  newGame();
  ActivePlayerEl.classList.remove('player--winner');
});
