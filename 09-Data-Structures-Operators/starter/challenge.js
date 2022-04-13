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
const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// 2-
const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// 3-
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4-
const Players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(Players1Final);

// 5-
const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// 6-

const printGoals = function (...playernames) {
  console.log('The players who scored are: ');
  for (let index = 0; index < playernames.length; index++) {
    console.log(playernames[index]);
  }
  console.log('The number of goals scored is: ', playernames.length);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7-

// team1 < team2
//   ? console.log('team1 most likely to wins')
//   : console.log('team2 most likely to wins');

// console.log(
//   (team1 < team2 && 'team1 most likely to wins') ||
//     (team1 > team2 && 'team2 most likely to wins')
// );
