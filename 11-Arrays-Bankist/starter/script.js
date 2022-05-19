'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// display the movements
// put the code in function so to not to clutter the global context
const displayBankMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (movement, i, arr) {
    const typeMovement = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
                  <div class="movements__row">
                    <div class="movements__type movements__type--${typeMovement}">${
      i + 1
    } ${typeMovement}</div>
                    <div class="movements__date">3 days ago</div>
                    <div class="movements__value">${movement}</div>
                  </div>
                  `;
    console.log(html);
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayBankMovements(account2.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

//SPLICE method: mutates the original array
// usually what intersts us is what is left from the original array after using slice method not what the slice method returns or cut from the original array
// console.log(arr);
// console.log(arr.splice(2));
// console.log(arr);
// one of the most use case of the splice method is to delete the last element from the original array:
// arr.splice(-1);
// the second parameter of the splice method is the number of elements to delete not  the element that not to be included while splicing (like in the slice method)
// arr.splice(1, 2);
// console.log(arr);
// the reverse methode mutate the original array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// arr2.reverse();
// console.log(arr2);

// CONCAT: does not mutate the array calling the method
// const letters = arr.concat(arr2);
// console.log(letters);
// // JOIN
// console.log(letters.join('-'));
// AT: another way to reteurn a element of the array in a specific position. this method is implemented in ES2022
// before we have this
// const arr3 = [15, 16, 17];
// console.log(arr3[0]);
// and if we want to extract the last element we do this
// console.log(arr3[arr3.length - 1]);
// but now we can do it this way
// console.log(arr3.at(-1));

//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// without for each loop
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) console.log(`Movement ${i + 1} you deposited ${movement}`);
//   else console.log(`Movement ${i + 1} you withdrew ${Math.abs(movement)}`);
// }

// using for each method (the order of the call back function paameters is important!)
// !!! we can not beak from a forEch loop (continue and break does not work here)
// console.log('___________forEach___________');
// movements.forEach(function (movement, i, array) {
//   if (movement > 0) console.log(`Movement ${i + 1} you deposited ${movement}`);
//   else console.log(`Movement ${i + 1} you withdrew ${Math.abs(movement)}`);
// });

// forEach with maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// console.log('_____forEach with Maps');
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // forEach with sets
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log('_____forEach with sets');
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _value, map) {
//   console.log(`${value}: ${value}`);
// });
