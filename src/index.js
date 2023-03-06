import generateJoke from "./generateJoke";
import './styles/main.css';
import  about from './assets/about-me-image-left.png'

const img = document.getElementById('Image');

img.src = about;

console.log(generateJoke())