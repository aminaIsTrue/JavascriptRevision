'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnOpenModal => {
  btnOpenModal.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////Selecting elements//////////////////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelector('.header'));
// returns a NodeList of elements: not automatically updated
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// return Live collection: updated automatically
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

/////////////Creating & inserting elements to the DOM/////////////////////////////
// 1-creating dom elementing
const message = document.createElement('div');

message.classList.add('cookie-message');
// message.textContent =
// 'we are using cookies for improved functionalities and analytics';
message.innerHTML =
  'we are using cookies for improved functionalities and analytics. <button class = "btn btn--close-cookie"> Got it! </button>';

// 2-appending it to the header element

const header = document.querySelector('.header');
// header.before(message);
header.prepend(message);
// header.append(message.cloneNode(true));
// header.after(message.cloneNode(true));

////////////////////removing a DOM element//////////////////
const btnCloseCookie = document.querySelector('.btn--close-cookie');
btnCloseCookie.addEventListener('click', () => {
  message.remove();
});
// styles
// sets the style inline in the tag
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// shows just inline styles
// height will be empty, width will show 120%
// console.log(message.style.height);
// console.log(message.style.width);
//  if we want to show the style of an element from the web page (javascript automatically computes the style value)
// console.log(getComputedStyle(message).height);

// change the height

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 20 + 'px';
// console.log(message.style.height);

//
document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');

// shows the absolute path
// console.log(logo.src);

// shows the relative path
// console.log(logo.getAttribute('src'));

// change a value of a predefined tag attribute
console.log(logo.alt);
logo.alt = 'This is the logo of my website';
// console.log(logo.alt);

// add an attribute to a tag (predefined or not)
logo.setAttribute('designer', 'Amina');
// will return undefined since the designer is not a predefined image tag attributes
// console.log(logo.designer);
//
// console.log(logo.getAttribute('designer'));

// Iplementing scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  // get the coordinates of the bsection to scroll to
  const sectionCoordinates = section.getBoundingClientRect();

  // 1- scroll to section
  // window.scrollTo(
  //   sectionCoordinates.left + window.pageXOffset,
  //   sectionCoordinates.top + window.pageYOffset
  // );
  // 2- scroll to section with behavior
  // window.scrollTo({
  //   left: sectionCoordinates.left + window.pageXOffset,
  //   top: sectionCoordinates.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // 3- scroll to section with behavior (MODERN & EASY WAY)
  section.scrollIntoView({ behavior: 'smooth' });
});

//
const h1 = document.querySelector('h1');
const h1Hover = e => {
  alert('you hover over h1!');
};
h1.addEventListener('mouseenter', h1Hover);
setInterval(() => {
  h1.removeEventListener('mouseenter', h1Hover);
}, 10000);
// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomInt(0, 255));
// console.log(
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// );

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // console.log('Link');
  this.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
    0,
    255
  )},${randomInt(0, 255)})`;
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log('Link');
  this.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
    0,
    255
  )},${randomInt(0, 255)})`;
});

document.querySelector('.nav').addEventListener('click', function (e) {
  // console.log('Link');
  this.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
    0,
    255
  )},${randomInt(0, 255)})`;
});
