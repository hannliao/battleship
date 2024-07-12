import './style.css';
import Ship from './factories/ship';
import Player from './factories/player';
import { renderBoard } from './dom';

const game = () => {
  const player1 = Player('player');
  const player2 = Player('computer');

  const carrier = Ship('carrier', 5);
  const battleship = Ship('battleship', 4);
  const cruiser = Ship('cruiser', 3);
  const submarine = Ship('submarine', 3);
  const destroyer = Ship('destroyer', 2);

  player1.gameboard.placeShip(carrier, 'y', 7, 5);
  player1.gameboard.placeShip(battleship, 'x', 0, 4);
  player1.gameboard.placeShip(cruiser, 'x', 2, 0);
  player1.gameboard.placeShip(submarine, 'x', 1, 8);
  player1.gameboard.placeShip(destroyer, 'y', 5, 1);

  player2.gameboard.placeShip(carrier, 'x', 3, 0);
  player2.gameboard.placeShip(battleship, 'x', 3, 4);
  player2.gameboard.placeShip(cruiser, 'x', 1, 8);
  player2.gameboard.placeShip(submarine, 'y', 7, 7);
  player2.gameboard.placeShip(destroyer, 'y', 9, 8);

  renderBoard(player2);
  renderBoard(player1);

  play(player1, player2);
};

let turn;

const play = (player1, player2) => {
  turn === player2 ? player1 : player2;

  if (turn === player1) {
    console.log('click a cell to launch an attack');
  } else {
    let randomX;
    let randomY;
    while (!player2.attacks.include([randomX, randomY])) {
      randomX = generateRandomNumber();
      randomY = generateRandomNumber();
    }
    player2.attack(randomX, randomY);
  }

  /*
player1's turn - click a cell, event listener, computer receives attack
player2's turn - computer attacks randomly, player receives attack, change cell color
*/
};

function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

game();
