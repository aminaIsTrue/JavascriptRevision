'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1-
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// 2-
// let sum = 0;
// const odds = Object.values(game.odds);
// for (const value of odds) {
//   sum += value;
// }
// console.log(`The average odd is: ${sum / odds.length}`);

// 3-
for (let [team, odd] of Object.entries(game.odds)) {
  team =
    (team === 'team1' && game[team]) || (team === 'team2' && game[team]) || '';
  const victory = (team && 'victory') || 'draw';
  console.log(`Odd of ${victory} ${team}: ${odd}`);
}

// // 4-
// // put scorers names in an array
// const scoringPlayers = [];
// for (const [i, player] of game.scored.entries()) {
//   scoringPlayers.push(player);
// }
// // calculate num og goals of each player
// const scorers = {};
// scoringPlayers.forEach(function (x) {
//   scorers[x] = (scorers[x] || 0) + 1;
// });
// console.log(scorers);
