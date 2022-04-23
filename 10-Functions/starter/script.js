'use strict';
// const bookings = [];
// // default value of a parameter from ES6
// const createBooking = function (
//   flightNum,
//   numPasswnger = 1,
//   Price = 190 * numPasswnger
// ) {
//   // until ES5 default value are done like this
//   //   numPasswnger = numPasswnger || 1;
//   //   Price = Price || 150;
//   const booking = {
//     flightNum,
//     numPasswnger,
//     Price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LXM15', 3, 255);
// createBooking('GG23', 4);
// // to skip a parameter w need to set it as undefined
// // so it it has already a default value it will be assigned
// createBooking('RR458', undefined, 780);

// // how passing arguments works? value Vs. reference

// const flight = 'TZ455';
// const amina = {
//   fullName: 'Amina Ouj',
//   passport: 457812,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'KKK123';
//   passenger.fullName = 'Mrs' + passenger.fullName;
// };
// // flight we passed is just a copy of the the primitive variable
// // amina object is the reference of the reference variable
// checkIn(flight, amina);

const oneWord = function (str) {
  return str.replaceAll(' ', '');
};

// console.log(oneWord('Mamma mia'));

const upperFirstWord = function (str) {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};

// console.log(upperFirstWord('xml is interesting'));
// high-order function (has a callback function as an argument)
// Javascript uses callbacks functions all the time!
// callback functions help us add another level of abstration. makes the code readable and organised
const transformation = function (str, fn) {
  console.log(`the string to transform: ${str}`);
  console.log(`The transformed string is: ${fn(str)}`);
  console.log(`the string is transformed by: ${fn.name}`);
};

transformation('xml is cool', upperFirstWord);
transformation('xml is cool', oneWord);
