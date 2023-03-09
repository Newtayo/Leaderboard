import scoreDisplay from './scoreboard.js';

const render = async () => {
  const playerScores = async () => {
    const leaderBoardApi = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wlHvQNs6E7lvVjXzKtfA/scores', {
      method: 'GET',

    });
    const result = await leaderBoardApi.json();
    return result;
  };

  const player = await playerScores();
  const scoreList = document.querySelector('.scorelist');
  scoreList.innerHTML = '';
  const arrangedList = player.result.sort((a, b) => b.score - a.score);
  arrangedList.forEach((play) => {
    scoreDisplay(play);
  });
};
export default render;