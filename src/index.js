import './style.css';
import Ship from './scripts/ship';
import Player from './scripts/player';
import { renderBoard, renderAttack, gameOver } from './scripts/dom';

const player1 = Player('player');
const player2 = Player('computer');
let turn = player1;

const game = () => {
  const carrier1 = Ship('carrier', 5);
  const battleship1 = Ship('battleship', 4);
  const cruiser1 = Ship('cruiser', 3);
  const submarine1 = Ship('submarine', 3);
  const destroyer1 = Ship('destroyer', 2);

  player1.gameboard.placeShip(carrier1, 'y', 7, 5);
  player1.gameboard.placeShip(battleship1, 'x', 0, 4);
  player1.gameboard.placeShip(cruiser1, 'x', 2, 0);
  player1.gameboard.placeShip(submarine1, 'x', 1, 8);
  player1.gameboard.placeShip(destroyer1, 'y', 5, 1);

  const carrier2 = Ship('carrier', 5);
  const battleship2 = Ship('battleship', 4);
  const cruiser2 = Ship('cruiser', 3);
  const submarine2 = Ship('submarine', 3);
  const destroyer2 = Ship('destroyer', 2);

  player2.gameboard.placeShip(carrier2, 'x', 3, 0);
  player2.gameboard.placeShip(battleship2, 'x', 3, 4);
  player2.gameboard.placeShip(cruiser2, 'x', 1, 8);
  player2.gameboard.placeShip(submarine2, 'y', 7, 7);
  player2.gameboard.placeShip(destroyer2, 'y', 9, 8);

  renderBoard(player2);
  renderBoard(player1);

  play(player1, player2);
};

function play(player1, player2) {
  const computerCells = document.querySelectorAll('.computer .cell');
  computerCells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      cell.disabled = true;
      const x = e.target.dataset.x;
      const y = e.target.dataset.y;
      player1.attack(x, y, player2);
      renderAttack(cell);
      if (!player2.gameboard.lost()) {
        turn = player2;
        computerTurn();
      } else {
        gameOver(player1);
      }
    });
  });
}

function computerTurn() {
  setTimeout(() => {
    let randomX;
    let randomY;
    do {
      randomX = generateRandomNumber();
      randomY = generateRandomNumber();
    } while (player2.attacks.has(`${randomX},${randomY}`));

    player2.attack(randomX, randomY, player1);
    const cell = document.querySelector(
      `.player .cell[data-x='${randomX}'][data-y='${randomY}']`
    );
    renderAttack(cell);

    if (!player1.gameboard.lost()) {
      turn = player1;
    } else {
      gameOver(player2);
    }
  }, 300);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

game();

export { player1, player2, turn };
