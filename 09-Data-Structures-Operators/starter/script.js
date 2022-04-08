'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];
// the old way of destructuring the array
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
// the NEW way of destructuring the array
//

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , , fourth] = restaurant.categories;
console.log(first, fourth);
[first, fourth] = [fourth, first];
console.log(first, fourth);

console.log(restaurant.order(2, 0));

const [secondary, main] = restaurant.order(2, 0);
console.log(secondary, main);
// deconstructing a nested array
const [f, , [i, j]] = [1, 5, [10, 3]];
console.log(f, i, j);

// default values when the destructured array length is not preknown

const [q = -1, r = -1, s = -1] = [1, 2];

console.log(q, r, s);
