'use strict';
// challenge 1
// const checkDogs = function (dogsJulia, dogsKate) {
//   //1- shalow copy
//   const ShallowCopyDogsJulia = dogsJulia.slice(1, -2);
//   //2-   concatenate the 2 data
//   const concatDogsJuliaKate = ShallowCopyDogsJulia.concat(dogsKate);
//   // 3- adult or puppy
//   concatDogsJuliaKate.forEach(function (dog, i) {
//     const dogOrpuppy = dog < 3 ? 'Puppy' : 'Adult';
//     console.log(`Dog number ${i + 1} aged ${dog} is an ${dogOrpuppy}`);
//   });
// };
// 4- testing data
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// challenge 2
// 1-
const calcDogsHumanAge = function (dogAgaes) {
  const humanAges = dogAgaes.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  return humanAges;
};
const humanDogsAges = calcDogsHumanAge([1, 2, 3]);
// console.log(humanDogsAges);
// 2-
const excludDogs = function (dogAges) {
  const remainedDogsAges = dogAges.filter(dogAge => dogAge > 18);
  return remainedDogsAges;
};
// console.log(excludDogs(humanDogsAges));

// 3-

const averageDogsHumanAge = function (dogsAges) {
  dogsAges.reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);
};

// console.log(averageDogsHumanAge([1, 2, 3, 4]));

// coding challenge 4:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1- calculating the recommendedFood ammount for each dog
dogs.forEach(
  element => (element.recommendedFood = element.weight ** 0.75 * 0.28)
);
// console.log(dogs);

// 2- find Sarah's dog & find whether eating too much or too little

const sarahsDog = dogs.find(element => element.owners.includes('Sarah'));
const current = sarahsDog.curFood;
const recommended = sarahsDog.recommendedFood;

// console.log(`Sarah's dog eats too ${current > recommended ? 'much' : 'low'}!`);

// 3- create an array for owners whose dog eat (too much, too little)
// first separate dogs that eat to much from the ones that eat too little
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(element => element.owners)
  .flat();

// console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(element => element.owners);

// console.log(ownersEatTooLittle);

// 4- log to the console

// console.log(
//   `${ownersEatTooMuch.join(
//     ' and '
//   )}'s dogs eat too much and ${ownersEatTooLittle.join(
//     ' and '
//   )}'s dogs eat too little`
// );

// 5- is there any dog that eats the ammount of food recommended

// console.log(
//   `is there any dog that eats the ammount of food recommended? ${dogs.some(
//     dog => dog.curFood === dog.recommendedFood
//   )}`
// );

// 6- any dog eating an ok ammount of food?

// console.log(
//   dogs.some(
//     dog =>
//       dog.curFood > dog.recommendedFood * 0.9 &&
//       dog.curFood < dog.recommendedFood * 1.1
//   )
// );

// 7-showing which dogs eat an ok amount of food
// console.log(
//   dogs.filter(
//     dog =>
//       dog.curFood > dog.recommendedFood * 0.9 &&
//       dog.curFood < dog.recommendedFood * 1.1
//   )
// );

// 8- create a shallow copy of the dogs array and sorting it in an ascending order of recommended food quantitiy

const shallowDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(shallowDogs);
