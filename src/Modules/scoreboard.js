const scoreDisplay = (data) => {
  const scoreList = document.querySelector('.scorelist');

  const scoreDetails = document.createElement('li');
  scoreDetails.classList.add('scolist');
  scoreDetails.innerHTML = `<h3 class="name">${data.user} </h3>
        <p>: ${data.score}</p>
       `;
  scoreList.append(scoreDetails);
};
export default scoreDisplay;