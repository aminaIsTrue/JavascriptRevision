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
console.log(humanDogsAges);
// 2-
const excludDogs = function (dogAges) {
  const remainedDogsAges = dogAges.filter(dogAge => dogAge > 18);
  return remainedDogsAges;
};
console.log(excludDogs(humanDogsAges));
// 3-

const averageDogsHumanAge = function (dogsAges) {
  const sumAge = dogsAges.reduce((acc, dogAge) => (acc += dogAge), 0);
  return sumAge / dogsAges.length;
};

console.log(averageDogsHumanAge(humanDogsAges));
