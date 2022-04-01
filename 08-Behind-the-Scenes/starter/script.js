'use strict';
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);

// attempt to call the variable before declaration

// 1-Hoisting with variables
// start of TDZ: Temporal dead zone for job and year variables
// console.log(me); // log: undefined
// console.log(job); //log: script.js:24 Uncaught ReferenceError: Cannot access 'job' before initialization (then stop execution)
// console.log(year);
// var me = 'Amina';
// let job = 'programmer';
// const year = 1986;

// 2-Hoisting with functions
// start of TDZ of the function expression

// calling the functions
// console.log(addDecl(1, 3)); // log 4
// console.log(addExpr(1, 3)); //log: Cannot access 'addExpr' before initialization
// console.log(addArrow(1, 3));

// // function declaration
// function addDecl(a, b) {
//   return a + b;
// }
// // function expression
// const addExpr = function (a, b) {
//   return a + b;
// };
// // arrow function
// // if we try to log this function it gives this msg
// // addArrow is not a function. that is because as it is declared
// // with var keyword it is initialized as undefined
// // we can not have undefined(1,2) thats why the message is saying
// // it is not a function
// var addArrow = (a, b) => a + b;

// dangerous example using var
// this will invoque the delete function
// because we used a falsy statement as a condition
// we meant by it that number of products = 0
// but actually var usage will initialize the numProducts with undefined
// and undefined is a falsy expression !undefined = undefined
// thats why the delete function will be executed
// SO BEST PRACTICE IS DECLARE FIRST THEN USE!
if (!numProducts) deleteShoppingCard();
var numProducts = 10;
function deleteShoppingCard() {
  console.log('all products have been deleted!');
}
// another DIFFERENCE BETWEEN var let const

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x); //  log: true ==> x declared with var is the only variable that creates a prperty in the global window object
console.log(y === window.y); //log false
console.log(z === window.z); // log false
