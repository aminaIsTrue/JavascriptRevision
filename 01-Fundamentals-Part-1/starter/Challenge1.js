const massMark = 95;
const heightMark = 1.88;
const BMIMark = massMark / heightMark ** 2;

const massJohn = 85;
const heightJohn = 1.76;
const BMIJohn = massJohn / heightJohn ** 2;


console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)