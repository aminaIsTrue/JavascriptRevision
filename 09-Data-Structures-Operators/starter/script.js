'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  nameRestaurant: 'Classico Italiano',
  locationRestaurant: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
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
  test: function (p1, p2, p3, p4, p5) {
    console.log(p1, p2, p3, p4, p5);
  },
  order: function (mainIngr, ...otherIng) {
    console.log(mainIngr);
    console.log(otherIng);
  },
};

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

const rest1 = {
  rName: 'La lune',
  numGuests: 20,
};
const rest2 = {
  rName: 'Nora',
  Owner: 'Amina',
};
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
rest1.Owner &&= 'Anonymous';
console.log(rest1);
// console.log(rest2);
