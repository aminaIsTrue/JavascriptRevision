'use strict';

// Data needed for a later exercise

// object literals  Enhancement (ES6)
//3-we can compute proprety name
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const [, day2, , , , , ,] = [...weekdays];
const openingHours = {
  mon: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  nameRestaurant: 'Classico Italiano',
  locationRestaurant: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // object literals  Enhancement (ES6)
  //1-calling another object just by using the object name
  openingHours,
  //2-Using an easier sytax to declare functions
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex = 0,
    mainIndex = 1,
    time = '21:00',
    address = 'Pickup',
  }) {
    console.log(
      `order have been received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // function that accepts multiple arguments
  test(p1, p2, p3, p4, p5) {
    console.log(p1, p2, p3, p4, p5);
  },
  order(mainIngr, ...otherIng) {
    console.log(mainIngr);
    console.log(otherIng);
  },
  test1(x) {
    // console.log('Amina');
    x = 10;
    return x;
  },
};
// error because mon does not exist
// console.log(restaurant.openingHours.mon.open);
// with Optional chaining ES2020: on variables
// console.log(restaurant.openingHours.mon?.open);
// example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open;
//   restaurant.openingHours[day] && console.log(`In ${day}, we open at: ${open}`);
// }

// with Optional chaining ES2020: on methods
// console.log(restaurant.test1?.(0) ?? 'Method does not exist!');
// console.log(restaurant.eat?.('aaa') ?? 'Method does not exist!');
// with Optional chaining ES2020: on arrays
// const arr = [{ fName: 'Amina', age: 36 }];
// const arr1 = [];
// console.log(arr[1]?.fName || 'no such a value');
// console.log(arr1?.[1]?.fName || 'Array is empty');
// spread operator on Objects :since ES18
// console.log({ ...restaurant.openingHours });
// const newOpeningHours = {
//   ...restaurant.openingHours,
//   sun: { open: 10, close: 23 },
// };
// // console.log({ ...newOpeningHours });
// // object copy
// const hoursCopy = { ...newOpeningHours };
// console.log(hoursCopy);
// use the spead operator to pass the argumants to
// // the test function
// const arr = [1, 2, 3, 5, 8];
// restaurant.test(...arr);
// the spread operator
// const arr = [4, 5, 6];
// // const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);
// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);
// // use the spread operator for the function arguments
// console.log(...newArr);
// applications of spread operator
// adding a nemenu item to the retaurant main menu
// collection main menue by destructuring the restaurant object
// let { mainMenu, starterMenu } = restaurant;
// // mainMenu = ['Omlette', ...mainMenu];
// // console.log(mainMenu);
// // console.log(...mainMenu);
// // copy an array
// const mainMenuCopy = [...mainMenu];
// console.log(mainMenuCopy);
// // joint 2 arrays
// const fullMenu = [...starterMenu, ...mainMenu];
// console.log(fullMenu);
// spread operator on a string
// const myName = 'Amina';
// const NameAsSeparatedLetter = [...myName];
// console.log(NameAsSeparatedLetter);
// destructuring real use in functions' parameter declaration

// restaurant.orderDelivery({
//   time: '00:00',
//   address: 'Leihgesterner weg 130',
//   starterIndex: 2,
//   mainIndex: 2,
// });

// destructuring objects useful while using API
// must use the same vriables name as the object to destructure
// the order of variables to distruct is not important
// const { nameRestaurant, openingHours, locationRestaurant } = restaurant;
// console.log(nameRestaurant, openingHours, locationRestaurant);
// if we want other variable names

// const { nameRestaurant: nameR } = restaurant;
// console.log(nameR);
// uding default value while distructuring objects
// const { locationRestaurant1: locationR = 'default' } = restaurant;
// console.log(locationR); //shows default as there is no object attribute with that name
// shows undefined if no default value is assigned

// // Mutating object attributes
// let { starterMenu, mainMenu } = restaurant;
// console.log(starterMenu, mainMenu);
// ({ starterMenu, mainMenu } = { mainMenu, starterMenu });
// // why does not mutate?!
// console.log(starterMenu, mainMenu);

// nested objects
// const {
//   openingHours: {
//     fri: { open: oFri, close: cFri },
//   },
// } = restaurant;
// console.log(oFri, cFri);

// const arr = [2, 3, 4];
// // the old way of destructuring the array
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);
// // the NEW way of destructuring the array
// //

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , , fourth] = restaurant.categories;
// console.log(first, fourth);
// [first, fourth] = [fourth, first];
// console.log(first, fourth);

// console.log(restaurant.order(2, 0));

// const [secondary, main] = restaurant.order(2, 0);
// console.log(secondary, main);
// // deconstructing a nested array
// const [f, , [i, j]] = [1, 5, [10, 3]];
// console.log(f, i, j);

// // default values when the destructured array length is not preknown

// const [q = -1, r = -1, s = -1] = [1, 2];

// console.log(q, r, s);

// spread operator because it it is in th righ hand of the asseignment
// const arr = [1, 2, ...[4, 5, 6]];
// console.log(arr);

// destructuring an arr while using Rest syntax
// the spread operator is in the left position called Rest Syntax
// const [a, b, ...arr1] = [1, 2, 3, 8, 9, 6];
// console.log(a);
// console.log(arr1);

// Rest in objects

// const { openingHours, ...other } = restaurant;
// console.log(openingHours);
// console.log(other);
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekDays);

//Rest on functions
// const add = function (...nums) {
//   console.log(nums);
//   let sum = 0;
//   for (let index = 0; index < nums.length; index++) {
//     sum = sum + nums[index];
//   }
//   console.log(sum);
// };
// add(1, 2);
// add(5, 2, 8, 14);
// const x = [5, 6];
// add(...x);

// restaurant.order('Tuna', 'Olives', 'Mashrooms', 'Mozzarella');
// restaurant.order('Olives');

// short-circuting for ||
// console.log(3 || 'Amina');
// console.log('' || 'Amina');
// console.log(true || 0);
// console.log(undefined || null);
// restaurant.numGuests = 3;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// The Nullish coalasing operator
// doea not considers 0 and '' as falsy values
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// short-circuting for &&
// console.log(3 && 'Amina');
// console.log(true && '');
// console.log(true && 'a' && 23 && undefined && 'f');
// practical example
// check if a function exists
// if (restaurant.order) {
//   restaurant.order('Tuna', 'Mozzarella');
// }
// same logic with && short-circuting
// restaurant.order && restaurant.order('Tuna', 'Mozzarella');

// The Nullish coalasing operator
// doea not considers 0 and '' as falsy values

// ES2021 the ney logical assignment operators

// const rest1 = {
//   rName: 'La lune',
//   numGuests: 20,
// };
// const rest2 = {
//   rName: 'Nora',
//   Owner: 'Amina',
// };
// add defult guest number of it does not exsist
// using the || operator
// rest1.numGuests = rest1.numGuests || 10;
// we can write it with the logical assignment operator (|| or ??) so we do not repeat left side of the assignment
// rest1.numGuests ||= 10;
// rest1.numGuests ??= 10;

// same logic goes here
// rest2.numGuests = rest2.numGuests || 10;
// rest2.numGuests ||= 10;
// rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

// using the && logical assignment operator

// rest2.Owner = rest2.Owner && 'Anonymous';
// rest2.Owner &&= 'Anonymous';

// this set Owner to undefined
// rest1.Owner = rest1.Owner && 'Anonymous';
// this will not set Owner variable with undefined
// but not assign it at all!
// rest1.Owner &&= 'Anonymous';
// console.log(rest1);
// console.log(rest2);

// Using the for loop introduced in ES6

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menu);
// // for (const item of menu) console.log(item, menu.indexOf(item));
// console.log(`The menu consist of`);

// // console.log(` ${item[0] + 1}: ${item[1]}`);
// for (const [a, b] of menu.entries()) {
//   console.log(` ${a + 1}: ${b}`);
// }

// ESs "set": collection of non duplicate elements
// !!!  the main usecase of sets is to remove duplicates from arrays
// const orderSet = new Set(['Pizza', 'Foccaccia', 'Rizzotto', 'Pizza']);

// we can then create an array with the non-duplicate elements from the set
// const orderSetUniqueArr = [...orderSet];
// console.log(orderSetUniqueArr);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Bread'));
// console.log(orderSet.has('Foccaccia'));
// orderSet.add('Garlic Bread', 'Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Garlic Bread');
// console.log(orderSet);
// orderSet.clear();
// console.log(orderSet);

// iterating through a set (because it is iterable)
// for (const order of orderSet) {
//   console.log(order);
// }

//!! there is no need to retrieve elements from the set
// because the elements in the set are unique
// & because the order of the elements is not important
// !! the only thing we want to know if an element does exist and that we can do with has() method

// Maps datastructure to map values to keys
// In Maps the keys can have any value however in Objects Keys are basically always strings

// const Rest = new Map();

// console.log(Rest.set('name', 'Classici Italiano'));
// console.log(Rest.set(1, 'Lisbon'));
// console.log(Rest.set(2, 'Florence'));
// because the set method of the Map datastructure returns the updates Map
// we can "chain" the set methods like this

// Rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('opens', 12)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closd!');
// console.log(Rest);
// console.log(Rest.get(true));
// const time = 12;

// console.log(Rest.get(time >= Rest.get('opens') && time < Rest.get('close')));

// console.log(Rest.has('opens'));
// Rest.delete(2);
// console.log(Rest);
// console.log(Rest.size);
// // Rest.clear();
// console.log(Rest);

// alternative to populate a map without using the set method
// const question = new Map([
//   ['question', 'what is the best programming language'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['Correct', 'Javascript'],
//   [true, 'Corrrect'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// console.log(question.get('question'));
// // iterating through the map
// for (const [key, value] of question) {
//   typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
// }
// test by value
// const answer = prompt('Please choose the correct answer');
// const correct = question.get('Correct');

// console.log(question.get(answer === correct));

// test by key
// const answer = Number(prompt('Please choose the correct answer'));
// const correct = question.get('Correct');
// console.log(question.get(question.get(answer) === correct));
// convert Map to array
// console.log([...question]);

// working with strings
// const airline = 'Tap Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(airline.length);
// give the first occurence of  a charahter or part of a string
// console.log(airline.indexOf('r'));
// gives the last occurence of charachter or part of a string
// console.log(airline.lastIndexOf('r'));

// select a sub-string starting from an index
// console.log(airline.slice(4));
// select a sub-string stating the begining and end index
// console.log(airline.slice(4, 7));
// or dynamically
// const lastIndex = airline.indexOf(' ');
// console.log(airline.slice(0, lastIndex));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// small practice
// const checkMiddlSeat = function (seat) {
//   // middle seats are B & E
//   const isMiddle = seat.indexOf('B') || seat.indexOf('E');
//   isMiddle != -1
//     ? console.log(`${seat} is in the middle Row`)
//     : console.log(`${seat} is NOT in the middle Row`);
// };

// checkMiddlSeat('11B');
// checkMiddlSeat('112A');

// replace All method
// const announcement =
//   'All passengers come to boarding door 23. I repeat boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));
// using regular expression
// console.log(announcement.replace(/door/g, 'gate'));
// const CapitalizeName = function (n) {
//   const names = n.split(' ');
//   let capitalName = [];
//   for (let na of names) {
//     na = na[0].toUpperCase() + na.slice(1);
//     capitalName.push(na);
//   }
//   console.log(capitalName.join(' '));
// };

// CapitalizeName('amina ouj');

// const MaskCreditCard = function (creditCard) {
//   creditCard = String(creditCard);
//   console.log(creditCard.slice(-4).padStart(creditCard.length, '#'));
// };
// MaskCreditCard(1234567891234567);

// Exercice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (let [i, flight] of flights.split('+').entries()) {
  const flInfo = flight.replaceAll('_', ' ').trimStart().split(';');
  console.log(
    (
      (i === 0 || i === 2 ? '🔴' : '') +
      flInfo[0] +
      ' from ' +
      flInfo[1].slice(0, 3).toUpperCase() +
      ' to ' +
      flInfo[2].slice(0, 3).toUpperCase() +
      ' at (' +
      flInfo[3] +
      ')'
    ).padStart(47)
  );
}
