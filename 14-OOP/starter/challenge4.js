'use strict';
// 1-
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
  };
  brake = function () {
    this.speed -= 5;
    console.log(this.speed);
    // allow us to chaim methods
    return this;
  };
}

class EVCl extends CarCl {
  // 2-
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  //   3-
  accelerate = function () {
    //   override the accelerate method inherited from the Car class
    this.speed += 20;
    this.#charge -= 1;
    console.log(this);
    // allow us to chaim methods
    return this;
  };
  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
    // allow us to chaim methods
    return this;
  };
}

const Tesla = new EVCl('Tesla', 120, 23);
Tesla.accelerate();
