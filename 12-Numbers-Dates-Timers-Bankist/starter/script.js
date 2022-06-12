'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2022-06-03T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-06-08T17:01:17.194Z',
    '2022-06-04T23:36:17.929Z',
    '2022-06-10T05:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// the find method
const AccountJes = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(AccountJes);
// find the same account using for of method
// let AccountJesFor;
// for (const account of accounts) {
//   if (account.owner === 'Jessica Davis') {
//     AccountJesFor = account;
//     break;
//   } else continue;
// }
// console.log(AccountJesFor);

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

const calcDays = (day1, day2) =>
  Math.round((day1 - day2) / (1000 * 60 * 60 * 24));

const displayDays = numberDays => {
  if (numberDays === 0) return 'today';
  else if (numberDays === 1) return 'yesterday';
  else if (numberDays <= 7) return `${numberDays} days ago`;
};

const formatNumber = function (value, locale, currency) {
  const options = { style: 'currency', currency: currency };
  return new Intl.NumberFormat(locale, options).format(value);
};
// display the movements
// put the code in function so to not to clutter the global context
const displayBankMovements = function (acc) {
  containerMovements.innerHTML = '';
  acc.movements.forEach(function (movement, i, arr) {
    const typeMovement = movement > 0 ? 'deposit' : 'withdrawal';
    const dateMovement = new Date(acc.movementsDates[i]);
    const dateToday = new Date();
    const formattedDate = new Intl.DateTimeFormat(currentUser.locale).format(
      dateMovement
    );

    const formattedMovement = formatNumber(
      movement.toFixed(2),
      acc.locale,
      acc.currency
    );
    const display =
      displayDays(calcDays(dateToday, dateMovement)) || formattedDate;

    const html = `
                  <div class="movements__row">
                    <div class="movements__type movements__type--${typeMovement}">${
      i + 1
    } ${typeMovement}</div>
                    <div class="movements__date">${display}</div>
                    <div class="movements__value">${formattedMovement}</div>
                  </div>
                  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayBankMovements(account1.movements);
//  display the balance: The best is to alwys wrap the  code in a function//
const calcBalance = function (account) {
  const globalBalence = account.movements.reduce((acc, mov) => (acc += mov), 0);
  account.balance = globalBalence;
  const formattedBallance = formatNumber(
    globalBalence,
    account.locale,
    account.currency
  );
  labelBalance.textContent = `${formattedBallance}`;
};
// calcBalance(account1.movements);

const displayBankSummary = function (account) {
  // summary Deposits
  const sumDeposit = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => (acc += mov));

  // console.log(sumDeposit);
  labelSumIn.textContent = `${formatNumber(
    sumDeposit,
    account.locale,
    account.currency
  )}`;
  // summury withdrawel
  const sumWithdrawal = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => (acc += mov));
  labelSumOut.textContent = `${formatNumber(
    Math.abs(sumWithdrawal),
    account.locale,
    account.currency
  )}`;

  // deposit interest
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * account.interestRate) / 100)
    .filter(interest => interest > 1)
    .reduce((acc, interest) => acc + interest);
  labelSumInterest.textContent = `${formatNumber(
    interest,
    account.locale,
    account.currency
  )}`;
};
// displayBankSummary(account1.movements);

// compute username //

// const CreateUsername = function (user) {
//   return user
//     .toLowerCase()
//     .split(' ')
//     .map(u => u[0])
//     .join('');
// };
// console.log(username('amina ouj'));

// generalize username computation
const accountsUsername = accounts.map(function (account) {
  return account.owner
    .toLowerCase()
    .split(' ')
    .map(u => u[0])
    .join('');
});

// console.log(accountsUsername);

// for each account if we want to add a username attribute to the accounts
const generateUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(u => u[0])
      .join('');
  });
};
generateUsernames(accounts);

const updateUI = function (acc) {
  displayBankMovements(acc);
  calcBalance(acc);
  displayBankSummary(acc);
};
// console.log(account1);

// implementing the login function
// in forms the hitting of the enter button ot cliking on the submit button both trigger the click event
// the user that wants to be logged in need to be declared globally so because this ino will be useful for different functions
let currentUser;
// fake log in /////
currentUser = account1;
// updateUI(account1);
// containerApp.style.opacity = 100;

// ///////////////
btnLogin.addEventListener('click', function (e) {
  // prevent the form from reloading
  e.preventDefault();
  // find the account with the entered credentials
  currentUser = accounts.find(
    acc =>
      acc.username === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );
  // console.log(currentUser);
  // if exists display their display:(bankmovements, global balance, and bank summary)
  if (currentUser) {
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // display welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentUser.owner.split(' ')[0]
    }`;
    updateUI(currentUser);
    // Update welcome date
    const today = new Date();
    const options = {
      day: 'numeric',
      month: 'long',
      year: '2-digit',
      hours: 'numeric',
      minutes: 'numeric',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentUser.locale,
      options
    ).format(today);

    containerApp.style.opacity = 100;
    // extract movements from movement container
    const movDivs = document.querySelectorAll('.movements__value');
    const valuesInDivs = Array.from(movDivs, div =>
      Number(div.textContent.replace('€', '').replace(' ', ''))
    );
    console.log(valuesInDivs);
  }
});
// implementing the transfer function

btnTransfer.addEventListener('click', function (e) {
  // prevent the form from reloading
  e.preventDefault();
  const transferToAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const transferAmmount = +inputTransferAmount.value;
  const dayMovement = new Date().toDateString();
  // ammount not negative, persone has enough balance. not transfereing to herself
  if (
    currentUser.balance >= transferAmmount &&
    transferToAccount &&
    transferAmmount > 0 &&
    transferToAccount.username !== currentUser.username
  ) {
    transferToAccount.movements.push(transferAmmount) &&
      transferToAccount.movementsDates.push(dayMovement) &&
      currentUser.movements.push(-transferAmmount) &&
      currentUser.movementsDates.push(dayMovement);
    updateUI(currentUser);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  console.log(currentUser);
});

// implement loan request

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  // bank accepts a loan if the person has at least one deposit with at least 10% of the amount of the loan requested
  const loanRequested = Math.floor(inputLoanAmount.value);
  const dayMovement = new Date().toDateString();
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
  loanRequested > 0 &&
    currentUser.movements.some(mov => mov >= (loanRequested * 10) / 100) &&
    currentUser.movements.push(loanRequested) &&
    currentUser.movementsDates.push(dayMovement);
  updateUI(currentUser);
});

// sorting the current user movements
let flag = false;
btnSort.addEventListener('click', function () {
  const copyMovements = currentUser.movements.slice();
  // if (flag) {
  //   displayBankMovements(currentUser.movements);
  //   flag = false;
  // } else {
  //   displayBankMovements(copyMovements.sort((a, b) => a - b));
  //   flag = true;
  // }

  flag
    ? displayBankMovements(copyMovements)
    : displayBankMovements(copyMovements.sort((a, b) => a - b));
  flag = !flag;
});

// close an account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if (username === currentUser.username && pin === currentUser.pin) {
    const indexAccount = accounts.findIndex(
      acc =>
        acc.username === currentUser.username && acc.pin === currentUser.pin
    );

    accounts.splice(indexAccount, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
  inputClosePin.blur();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//  the filter method (just the deposits from  the movements array) //
// const deposits = movements.filter(mov => mov > 0);
// chaining the map, filter and rduce methods

const SumDepositsInEur = movements
  .filter(mov => mov > 0)
  .map(dep => dep * 0.99)
  .reduce((acc, dep) => (acc += dep), 0);

// console.log(`${SumDepositsInEur} €`);

//  the filter method (just the withdrawals from  the movements array) //
const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// the reduce method (to calculate the global balance resulting from addin up all the movements) //
//  this callback function of this method has for parameters: the first one is an accumilator
// the reduce method has 2 parameters: the callback function and the initial value that the accumlator forom the callback function needs to start
// const globalBalence = deposits.reduce(
//   (acc, mov, i, movmnts) => (acc += mov),
//   0
// );
// console.log(globalBalence);

// using reduce to calculate the max//
const maxMovement = movements.reduce((acc, mov) => {
  // console.log(acc, mov);
  return acc > mov ? acc : mov;
}, movements[0]);
// console.log(maxMovement);

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
// Map method
const euroToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
//  using arrow function
const movementsUSD = movements.map(mov => mov * euroToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const MovementsDesc = movements.map((movement, i, array) => {
//   if (movement > 0) return `Movement ${i + 1} you deposited ${movement}`;
//   else return `Movement ${i + 1} you withdrew ${Math.abs(movement)}`;
// });

// simplifying the previous code
const MovementsDesc = movements.map(
  (movement, i) =>
    `Movement ${i + 1} you ${
      movement > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(movement)}`
);
// console.log(MovementsDesc);

// every ia an array method that returns true if all objects calling it satisfy the wanted condition

// here it returns false because the movents array contain deposits and withdrawals
// console.log(movements.every(mov => mov >= 0));
// here it returns true because all movements are deposits
// console.log(account4.movements.every(mov => mov >= 0));

// flat method: flatten a nested array
// the argument of the flat method  indicate the deep degree of flatening if we have several nesting levels in the array

// const accounts = [account1, account2, account3, account4];

// const accountsMovements = [
//   account1.movements,
//   account2.movements,
//   account3.movements,
//   account4.movements,
// ];
// or we use the map method: better!
const accountsMovements = accounts.map(acc => acc.movements);
// console.log(accountsMovements.flat());
// console.log(accountsMovements.flat().reduce((acc, mov) => acc + mov, 0));

// we use flatMap() to map then to flat the array if we have just one level of the nested arrays
// console.log(
// accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
// );

// creating arrays programaticaly
// 1- new arrays
const arr1 = Array.from(
  { length: 100 },
  (_cur, i) => Math.trunc(Math.random() * 6) + 1
);
// console.log(arr1);
// 2- from iterables
const movDivs = document.querySelectorAll('.movements__value');
const valuesInDivs = Array.from(movDivs, div =>
  Number(div.textContent.replace('€', '').replace(' ', ''))
);
// console.log(valuesInDivs);
// const movmnts = valuesInDivs.map(div =>
//   Number(div.textContent.replace('€', '').replace(' ', ''))
// );
// console.log(movmnts);

// 1.calculate how much have been deposited in the bank
//  flat all the movments of all accounts in one array
// *-step by step
// const accntsMovmnts = accounts.flatMap(acc => acc.movements);
// console.log(accntsMovmnts);
// const allDeposits = accntsMovmnts.filter(mov => mov > 0);
// console.log(allDeposits);
// const sumDeposits = allDeposits.reduce((acc, dep) => acc + dep, 0);
// console.log(sumDeposits);

// *-chaining the methods
const sumDeposits = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, dep) => acc + dep, 0);
// console.log(sumDeposits);

// 2.how many deposits in the bank with at least 1000$
//  filter just the flatapped  deposits > 1000$  + calculate the length of the resulted array
// use length method
// const deposits = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;
// console.log(`There is ${deposits} deposits greater than 1000 $`);

// use reduce method
const deposits = accounts
  .flatMap(acc => acc.movements)
  .reduce((counter, mov) => (mov > 1000 ? counter + 1 : counter), 0);
// console.log(`There is ${deposits} deposits greater than 1000 $`);

// 3-create an object containing sum of deposits and sum of withdrawals
const BankMovmentsSummary = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, mov) => {
      mov > 0 ? (sum.dep += mov) : (sum.withdraw += mov);
      return sum;
    },
    { dep: 0, withdraw: 0 }
  );

// console.log(BankMovmentsSummary);

// 4- capitalize the first letters of the words of a string
//  this is a nice title => This Is a Nice Title

const capitalizeTitleInitials = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'but', 'or', 'on', 'in', 'with', 'and'];
  //  convert the title to ower case before starting
  const wordsTitle = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      // or use exceptions.include(word): it returns  true or false
      exceptions.indexOf(word) >= 0 ? word : capitalize(word)
    )
    .join(' ');

  return capitalize(wordsTitle);
};

// console.log(capitalizeTitleInitials('this is a nice title'));
// console.log(
//   capitalizeTitleInitials('this is ANOTHER lonG title BUT with mixed CASES')
// );
// console.log(capitalizeTitleInitials('and this is a nice title'));
//   generalize a random function which returns a random int between two numbers

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(0, 1));

//  working with dates
// '2019-11-18T21:31:17.178Z'
console.log(new Date(account1.movementsDates[0]));

// set dates in our web app
// const today = new Date();

// labelDate.textContent = `${String(today.getDate()).padStart(2, '0')}/${String(
//   today.getMonth() + 1
// ).padStart(2, '0')}/${today.getFullYear()}, ${String(today.getHours()).padStart(
//   2,
//   '0'
// )}:${String(today.getMinutes()).padStart(2, '0')}`;
