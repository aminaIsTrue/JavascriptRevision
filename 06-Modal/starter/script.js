'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function HideModalOverlay() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

closeModal.addEventListener('click', HideModalOverlay);

overlay.addEventListener('click', HideModalOverlay);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    HideModalOverlay();
  }
});
