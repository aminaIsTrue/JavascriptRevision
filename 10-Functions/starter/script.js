'use strict';
//  function returns as a function
// const greetWith = function (greet) {
//   return function (name) {
//     console.log(`${greet} ${name}`);
//   };
// };
// how the returned function remembers the argument passed to its parent function?
// because of the closures, to be detailed n the following sessions!
// the function returning function will be usefull in functional programming
// const greetWithHello = greetWith('Hello');
// greetWithHello('Amina');

// creating a function calling another function using arrow functions
// const greet = greeting => {
//   name => console.log(`${greeting} ${name}`);
// };
// greet('Hola!')('Amina');

const luftHanza = {
  airline: 'Lufthanza',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.booking.push({
      flight: `${this.iataCode}${flightNum}`,
      name: ` ${name}`,
    });
  },
};
// luftHanza.book(266, 'Amina Ouj');
// luftHanza.book(635, 'John Doe');

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  booking: [],
};

const book = luftHanza.book;
// the following will generate an error
// because the book is a function and not a method
// and for regular function calls the "this" keyword is pointing to undefined in "strict mode"
// book(222, 'Sari Cool');
// to overcome it, we need to tell javascript explicitly to what the "this" keyword is pointing to
// 1-by using the "call" Method, and specifying in the first argument what the "this" keyword is refering to
// book.call(euroWings, 222, 'Sari Cool');
// book.call(luftHanza, 154, 'titif Ouj');
// console.log(luftHanza);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'SE',
  booking: [],
};
// book.call(swiss, 777, 'Ziad Ouj');
// console.log(swiss);

// 2-using the apply Method: it is not that used anymore in the modern Javascript
// const flightData = [888, 'Fati fleur'];
// book.apply(swiss, flightData);
// console.log(swiss);
// 3-the other best way is use the call method and all the arguments beside the "this" keyword as an array that we will spread in the "book.call" call
// book.call(swiss, ...flightData);
// console.log(swiss);
// 4-another more usefull way is to 'bind' the book function to the object one time and wheneer we want to call the function all what we have to do is to give the argument without defining the "this" object each time

const bookLH = book.bind(luftHanza);
// bookLH(777, 'Amato bolaylato');
// const bookEW = book.bind(euroWings);
// const bookSW = book.bind(swiss);
// we can take it further by defining all the fixed argumwents for each call and specify them in thebind method
// example if we want to book for the same flight number
const bookLH154 = book.bind(luftHanza, 154);
// and then we specify the rest of changing parameters in the bound function
// bookLH154('Stephen Lili');
// console.log(luftHanza);
// other situations where the bind method is vey usefull
// when we use objects together with eventListeners
luftHanza.planes = 300;
luftHanza.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// the this keyword from the "buyPlane" method is not pointing to the luftHanza object anymore
// but it is pointing to the elemnt the event handler is attached to

// document.querySelector('.buy').addEventListener('click', luftHanza.buyPlane);
// so we need to redifine the "this" keyword here too! (this is a very useful usecase)
// const buyPlane = luftHanza.buyPlane;
// document
//   .querySelector('.buy')
//   .addEventListener('click', luftHanza.buyPlane.bind(luftHanza));

const addTax = (rate, value) => value + rate * value;
// with bind method (partial application)
// const addTaxPrBind = addTax.bind(null, 0.23);

// console.log(addTaxPrBind(100));
// using arrow function
// const addTaxPrArr = value => addTax(0.23, value);
// console.log(addTaxPrArr(100));

// this function will be executed once
// it is called Immediately Invoked Function Expression IIFE
(function () {
  console.log('this function will never execute again');
})();
// the same but using the arrow function
(() => console.log('this function will never execute again TOO'))();
