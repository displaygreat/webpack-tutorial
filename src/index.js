import './styles/main.scss';
import car from './images/car.png';
import play from './images/play.svg'
// Create a class property without a constructor
class Game {
  name = 'Violin Charades'
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

const img = document.createElement('img');
img.src = car;
img.classList.add('car');

const svg = document.createElement('img');
svg.src = play;
svg.classList.add('play');

const heading = document.createElement('h1')
heading.textContent = 'Interesting!';
const app = document.querySelector('#root')
app.append(heading, p, img, svg);