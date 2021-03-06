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
// document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');

// shows the absolute path
// console.log(logo.src);

// shows the relative path
// console.log(logo.getAttribute('src'));

// change a value of a predefined tag attribute
// console.log(logo.alt);
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
// h1.addEventListener('mouseenter', h1Hover);
// setInterval(() => {
//   h1.removeEventListener('mouseenter', h1Hover);
// }, 10000);
// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomInt(0, 255));
// console.log(
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// );

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // console.log('Link');
//   this.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
//     0,
//     255
//   )},${randomInt(0, 255)})`;
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log('Link');
//   this.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
//     0,
//     255
//   )},${randomInt(0, 255)})`;
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   // console.log('Link');
//   this.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
//     0,
//     255
//   )},${randomInt(0, 255)})`;
// });

// implement page navigation using event delegation
// Slotion 1: without using event delegation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const section = document.querySelector(`${id}`);
//     section.scrollIntoView({ behavior: 'smooth' });
//   });
// });
// // Slotion 2:  using event delegation
//    1-add event listener to the common parent
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //   2-determine which child originated the event click
  const targetEl = e.target;
  if (targetEl.classList.contains('nav__link')) {
    const id = targetEl.getAttribute('href');
    const section = document.querySelector(`${id}`);
    section.scrollIntoView({ behavior: 'smooth' });
    // console.log(section);
  }
});

// create a tabbed component

// selcet the tabs,container, content areas

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const contentAreas = document.querySelectorAll('.operations__content');
// add event handler for the 3 components

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const tab = e.target.closest('button');
  if (tab) {
    // determin which tab selected
    const dataTab = tab.getAttribute('data-tab');
    // console.log(dataTab);
    // select its adequate content area
    const contentArea = document.querySelector(
      `.operations__content--${dataTab}`
    );
    // remove active class from all content areas and tabs
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    contentAreas.forEach(el =>
      el.classList.remove('operations__content--active')
    );
    // make the content area and the button active only for the one clicked
    contentArea.classList.add('operations__content--active');
    tab.classList.add('operations__tab--active');
  }
});

// create a menue fade animation

// select the nav bar

const navBar = document.querySelector('.nav');
// attach event listerner to oppost events (mouseover, mousout)
// because when the mouse is over a link means it is out of all the other nav links

const navMngmnt = function (e, opacity) {
  // console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const links = link.closest('.nav').querySelectorAll('.nav__link');
    const img = link.closest('.nav').querySelector('img');
    // change the opacity of the other siblings

    links.forEach(el => {
      if (el != link) {
        el.style.opacity = this;
        img.style.opacity = this;
      }
    });
  }
};
navBar.addEventListener('mouseover', navMngmnt.bind(0.3));
navBar.addEventListener('mouseout', navMngmnt.bind(1));

// implementing sticky navogation starting from section 1
// solution 1: implementing scroll event(not the optimal solution as the event is fired in every scroll)
// section 1 cordinates
// const initialScroll = section.getBoundingClientRect().top;
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY >= initialScroll) {
//     navBar.classList.add('sticky');
//   } else {
//     navBar.classList.remove('sticky');
//   }
// });

// solution 2: use the intersection observer API

// const header1 = document.querySelector('.header');
// console.log(navBar.getBoundingClientRect().height);
// const observerCallback = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   entry.isIntersecting
//     ? navBar.classList.remove('sticky')
//     : navBar.classList.add('sticky');
// };
// const headerObserver = new IntersectionObserver(observerCallback, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navBar.getBoundingClientRect().height}px`,
// });
// headerObserver.observe(header1);

// revealing elements on scroll using IntersectionObserver
// select the sections

const sections = document.querySelectorAll('.section');
const observerCallback = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(observerCallback, {
  root: null,
  threshold: 0.15,
});

sections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// implementing lazy loading
// select the easy loaded images and only theses not all images
const lazyImages = document.querySelectorAll('img[data-src]');

// implement the callback function that will load the lazy loaded images

const LoadImgCallBack = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // replace the lazy image with the real image & remove the bluring class
  entry.target.src = entry.target.dataset.src; //this will trigger the loading event which takes time to finish
  // thas why we needed to triger the removing of the bluring class at the end of the loading
  // for that purpuse we need to attach an event listener to the target entry
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

// create the observer object
const lazyImagesObserver = new IntersectionObserver(LoadImgCallBack, {
  root: null,
  threshold: 0.15,
});

// assign an observer to the lazy loaded images
lazyImages.forEach(img => lazyImagesObserver.observe(img));

// implementing the slding effect

// select the slides
const slides = document.querySelectorAll('.slide');
// select the buttons to move between the slides
const BtnLeft = document.querySelector('.slider__btn--left');
const BtnRight = document.querySelector('.slider__btn--right');
let currSlide = 0;
const maxSlides = slides.length;
const dotsContainer = document.querySelector('.dots');
const slideSections = function (curr) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - curr) * 100}%)`;
  });

  // activateDot(curr);
};

// activate the dot
const activateDot = function (curr) {
  const dots = document.querySelectorAll(`.dots__dot`);
  dots.forEach(dot => dot.classList.remove('dots__dot--active'));
  const activeDot = document.querySelector(`.dots__dot[data-slide="${curr}"]`);
  activeDot.classList.add('dots__dot--active');
};
// separate the overlapped slides
slideSections(currSlide);
// making the slides go right
const nextSlide = function () {
  if (currSlide === maxSlides - 1) currSlide = 0;
  else currSlide++;

  slideSections(currSlide);
  activateDot(currSlide);
};
BtnRight.addEventListener('click', nextSlide);
// making the slides go left
const PreviousSlide = function () {
  if (currSlide === 0) currSlide = maxSlides - 1;
  else currSlide--;

  slideSections(currSlide);
  activateDot(currSlide);
};
BtnLeft.addEventListener('click', PreviousSlide);

// applying go right and left when pressing the left and right arrow keyboard keys

document.addEventListener('keydown', function (e) {
  e.preventDefault();
  if (e.key === 'ArrowRight') nextSlide();
  else if (e.key === 'ArrowLeft') PreviousSlide();
});

// create the clickable dots

const createDot = function (i) {
  let active;
  i === 0 ? (active = 'dots__dot--active') : '';
  return `<button class = 'dots__dot ${active}' data-slide='${i}'></button>`;
};

for (let index = 0; index < maxSlides; index++) {
  dotsContainer.insertAdjacentHTML('beforeend', createDot(index));
}

dotsContainer.addEventListener('click', function (e) {
  currSlide = e.target.dataset.slide;
  // console.log(currSlide);
  if (e.target.classList.contains('dots__dot')) {
    slideSections(currSlide);
    activateDot(currSlide);
  }
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
