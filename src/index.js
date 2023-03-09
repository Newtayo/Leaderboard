import render from './Modules/renderScore.js';
import './styles/main.css';
import addScore from './Modules/addScore.js';

const refesh = document.getElementById('refreshbtn');
const scoreinput = document.querySelector('.scoreinput');

render();
refesh.addEventListener('click', () => {
  render();
});

scoreinput.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore();
});
