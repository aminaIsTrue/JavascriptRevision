// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   // 1-1: propmt the user
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question} \n ${this.options.join(
//           '\n'
//         )}\n (write Option number) `
//       )
//     );
//     // console.log(answer);

//     // 1-2 register the answer
//     typeof answer === 'number' &&
//       answer >= 0 &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },
//   // 3-
//   displayResults(type = 'array') {
//     if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(',')}`);
//     } else {
//       console.log(this.answers);
//     }
//   },
// };

// // poll.registerNewAnswer();
// // 2-
// // document
// //   .querySelector('.poll')
// //   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// // // poll.answers = [2, 3, 4];
// // poll.displayResults.call({ answers: [0, 2, 3, 4] }, 'string');
