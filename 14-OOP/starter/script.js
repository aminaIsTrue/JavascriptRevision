'use strict';

// creating objects for constructor function
const Person = function (firstName, birthYear) {
  // console.log(this);
  //   instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   never define methods inside the constructor function
  // why? I will have more understanding of it in the next lecture
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
// when we create a new object from a constructor
// 1-the "new" keyword create an empty object
// 2-the function call assigns the empty object {} to the "this" keyword
// 3- the object is linked to the prototype (? how need more understanding!)
// 4-the function automatically returns the object (thats why we can assighn it automatically to a variable as bellow!)
const me = new Person('Amina', 1986);
const bigBrother = new Person('Titif', 1984);
const littleBrother = new Person('Jalalay', 1990);
// above we created 3 instances of the Person "Class"

// Implementing prtotypeinheritence
// we implement the functions on the constrator funcions
// and then the object we created have access to it
// it is better than creating the method in the function constructor directly and then each of the object we instanciate from it will contain a copy
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// console.log(Person.prototype);

// me.calcAge();
// bigBrother.calcAge();
// littleBrother.calcAge();

// console.log(me.__proto__);
// console.log(Person.__proto__);
