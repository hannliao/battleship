import './style.css';
import Ship from './factories/ship';
import Player from './factories/player';
import { renderBoard } from './dom';

const game = () => {
  const player1 = Player('your');
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

  renderBoard(player2.gameboard);
  renderBoard(player1.gameboard);
};

game();
