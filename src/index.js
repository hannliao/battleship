import './style.css';
import Ship from './scripts/ship';
import Player from './scripts/player';
import { renderBoard, renderAttack } from './scripts/dom';

const player1 = Player('player');
const player2 = Player('computer');
let turn = player1;

const game = () => {
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
    }
  }, 500);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

game();

export { player1, player2, turn };
