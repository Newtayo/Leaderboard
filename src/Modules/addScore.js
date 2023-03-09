const addScores = async () => {
  const scoreinput = document.querySelector('.scoreinput');

  const addPlayer = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wlHvQNs6E7lvVjXzKtfA/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: `${scoreinput.elements.yourName.value}`,
      score: `${scoreinput.elements.yourScore.value}`,

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  });
  const submitScore = await addPlayer.json();

  scoreinput.elements.yourName.value = '';
  scoreinput.elements.yourScore.value = '';

  return submitScore;
};
export default addScores;
