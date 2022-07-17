'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// 2-
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
// 3-
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// 1- Create a class EV that will inherit from the Car class

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// 4-apply inheritance

EV.prototype = Object.create(Car.prototype);
// 2-

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// 3-
EV.prototype.accelerate = function () {
  //   override the accelerate method inherited from the Car class
  this.speed += 20;
  this.charge = this.charge * 0.9;
  console.log(this);
};

const Tesla = new EV('Tesla', 120, 100);
