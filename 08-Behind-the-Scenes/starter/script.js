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
// if (!numProducts) deleteShoppingCard();
// var numProducts = 10;
// function deleteShoppingCard() {
//   console.log('all products have been deleted!');
// }
// // another DIFFERENCE BETWEEN var let const

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x); //  log: true ==> x declared with var is the only variable that creates a prperty in the global window object
// console.log(y === window.y); //log false
// console.log(z === window.z); // log false

// this in the gglobal scope = the window object
// console.log(this);

// this inside aregular function (function without an owner)=
// undefined (in strict mode) ||  Golobal Object (in sloppy mode)
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1986);

// this inside arrow function = global object
// because arrow functions does not get their own this keyword
// Arrow fuctions use the Lexical this keyword which means that it uses the this keyword of its parent function (its parent scope)
// const calcAgeArr = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArr(1986);

// this keyword is the Amina Object: the parent Object
// const Amina = {
//   year: 1986,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// Amina.calcAge();
// // if we create an object that borrows a function from another object
// // then the this keyword will point now to the object that calls it
// const matilda = {
//   year: 2012,
// };
// matilda.calcAge = Amina.calcAge;
// matilda.calcAge();

// // based on the previous explanation,this keyword is undefined
// const f = Amina.calcAge;
// f();

// primitive variables in practice

//the mutation works because
// when mutating the lastName primitive variable
// it means that we created a new @memory with the new value. so the lastName identifier will no longer point the previous memory @ but only OldLastName variable is
// let lastName = 'Wiliams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // reference variables in practice
// // this creates an @memory in the call stack whose value is the memory@ in the heap containing the actual object
// const Amina = {
//   firstName: 'Amina',
//   lastName: 'Ouj',
//   age: 36,
// };
// // by doing this we are creating  another unique identifier called MarriedAmina which points to the same memory @ as the unique identifier Amina which means that it in turns refer to the same @memory in the heap containing the Amina Object as a value
// // thats why any change made by either objects is repercuted to both
// const MarriedAmina = Amina;
// MarriedAmina.lastName = 'Schmidt   ';
// console.log('Name befor getting married: ', Amina.lastName);
// console.log('Name After getting married: ', MarriedAmina.lastName);

// // what if we want to change one without changing the other

// we use Object.assign: works just for first level objects (shallow copy)
const Amina = {
  firstName: 'Amina',
  lastName: 'Ouj',
  age: 36,
  family: ['Alice', 'Jalalay', 'Titif'],
};

const MarriedAmina = Object.assign({}, Amina);
MarriedAmina.lastName = 'Schmidt';
MarriedAmina.family.push('Jonas');
console.log('familiy ', Amina.family);
console.log('family: ', MarriedAmina.family);

// what to use for nested objects? (deep clone)
// advanced topic involving importing some external library (for future search)
