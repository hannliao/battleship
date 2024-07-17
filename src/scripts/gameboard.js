import { updateStats } from './dom';

export default function Gameboard() {
  let size = 10;
  let board = Array(size)
    .fill(null)
    .map(() => Array(size).fill(null));
  let misses = [];
  let ships = [];

  function placeShip(ship, orientation, x, y) {
    if (!isValidPlacement(ship, orientation, x, y)) {
      throw new Error('ship cannot go off board');
    }

    for (let i = 0; i < ship.length; i++) {
      const [nextX, nextY] = orientation === 'x' ? [x + i, y] : [x, y + i];
      if (isCollision(nextX, nextY)) {
        throw new Error('ship cannot collide with other ships');
      }
      board[nextX][nextY] = ship.id;
    }
    ships.push(ship);
  }

  function isValidPlacement(ship, orientation, x, y) {
    if (orientation === 'x' && x + ship.length > size) {
      return false;
    }
    if (orientation === 'y' && y + ship.length > size) {
      return false;
    }
    return true;
  }

  function isCollision(x, y) {
    if (board[x][y] !== null) {
      return true;
    }
    return false;
  }

  function receiveAttack(x, y) {
    if (board[x][y] === null) {
      misses.push([x, y]);
    } else {
      const hitShip = ships.find((ship) => ship.id === board[x][y]);
      hitShip.hit();
      if (hitShip.isSunk()) {
        updateStats(hitShip.id);
      }
    }
  }

  function lost() {
    for (let ship of ships) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }

  return {
    size,
    misses,
    placeShip,
    receiveAttack,
    lost,
    board,
  };
}
