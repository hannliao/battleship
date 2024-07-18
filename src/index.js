import './style.css';
import Ship from './scripts/ship';
import Player from './scripts/player';
import { renderBoard, renderAttack, clearStats, gameOver } from './scripts/dom';

const game = () => {
  player1 = Player('player');
  player2 = Player('computer');
  turn = player1;

  const carrier1 = Ship('carrier', 5);
  const battleship1 = Ship('battleship', 4);
  const cruiser1 = Ship('cruiser', 3);
  const submarine1 = Ship('submarine', 3);
  const destroyer1 = Ship('destroyer', 2);

  let { orientation, x, y } = generateRandomPlacement(player1, carrier1);
  player1.gameboard.placeShip(carrier1, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player1, battleship1));
  player1.gameboard.placeShip(battleship1, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player1, cruiser1));
  player1.gameboard.placeShip(cruiser1, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player1, submarine1));
  player1.gameboard.placeShip(submarine1, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player1, destroyer1));
  player1.gameboard.placeShip(destroyer1, orientation, x, y);

  const carrier2 = Ship('carrier', 5);
  const battleship2 = Ship('battleship', 4);
  const cruiser2 = Ship('cruiser', 3);
  const submarine2 = Ship('submarine', 3);
  const destroyer2 = Ship('destroyer', 2);

  ({ orientation, x, y } = generateRandomPlacement(player2, carrier2));
  player2.gameboard.placeShip(carrier2, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player2, battleship2));
  player2.gameboard.placeShip(battleship2, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player2, cruiser2));
  player2.gameboard.placeShip(cruiser2, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player2, submarine2));
  player2.gameboard.placeShip(submarine2, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player2, destroyer2));
  player2.gameboard.placeShip(destroyer2, orientation, x, y);

  renderBoard(player2);
  renderBoard(player1);

  play(player1, player2);

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
        randomX = generateRandomNumber(player2.gameboard.size);
        randomY = generateRandomNumber(player2.gameboard.size);
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
    }, 200);
  }

  function generateRandomNumber(range) {
    return Math.floor(Math.random() * range);
  }

  function generateRandomPlacement(player, ship) {
    let orientation, x, y;
    do {
      orientation = generateRandomNumber(2) === 0 ? 'x' : 'y';
      x = generateRandomNumber(player1.gameboard.size);
      y = generateRandomNumber(player1.gameboard.size);
    } while (!player.gameboard.placeShip(ship, orientation, x, y));
    return { orientation, x, y };
  }

  const newGameButton = document.getElementById('new-game');
  newGameButton.addEventListener('click', () => {
    player1.gameboard.clear();
    player2.gameboard.clear();
    clearStats();
    game();
  });

  return {
    player1,
    player2,
    turn,
  };
};

let player1;
let player2;
let turn;
game();

export { player1, player2, turn };
