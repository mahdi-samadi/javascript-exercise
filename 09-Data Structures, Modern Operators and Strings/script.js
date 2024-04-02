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

// CHALLENGED 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
// CHALLENGED 2
// 1.
// for (const [i, player] of game.scored.entries())
// console.log(`Gol ${i + 1}: ${player}`);

// 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
// 3.
// for (const [i, j] of Object.entries(game.odds)) {
//   const mahdi = i === 'x' ? `draw` : `victory ${game[i]}`;
//   console.log(`odd of ${mahdi}: ${j}`);
// }

// CHALLENGED 1
// 1.
// const [player1, player2] = game.players;
// console.log(player1, player2);

// // 2.
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// // 3.
// // const allPlayers = [...player1, ...player2];
// const allPlayers = player1.concat(player2);
// console.log(allPlayers);

// // 4.
// const player1Final = [...player1, 'mahdi', 'elnaz', 'ninimon'];
// console.log(player1Final);

// // 5;
// // const newTeam = game.odds.draw ? 3.25 : (game.odds.draw = 3.25);
// // console.log(newTeam);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(players.length);
// };

// printGoals('mahdi', 'elnaz', 'ninimon');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('team1 is more likely to win');
// console.log(team1);
