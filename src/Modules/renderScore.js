import Score from './Score.js';
import scoreDisplay from './scoreboard.js';

const render = () => {
  const player1 = new Score('Tayo', '100');
  const player2 = new Score('Yemi', '70');
  const player3 = new Score('Funke', '90');
  const player4 = new Score('Wale', '80');
  const player5 = new Score('Tope', '95');

  const players = [player1, player2, player3, player4, player5];

  players.forEach((player) => {
    scoreDisplay(player);
  });
};
export default render;