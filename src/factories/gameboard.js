import { updateStats } from '../dom';

export default function Gameboard() {
  let board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
  let misses = [];
  let ships = [];

  function placeShip(ship, orientation, x, y) {
    if (!isValidPlacement(ship, orientation, x, y)) {
      throw new Error('ship cannot go off board');
    }

    let shipLocation = [];

    for (let i = 0; i < ship.length; i++) {
      const [nextX, nextY] = orientation === 'x' ? [x + i, y] : [x, y + i];
      if (isCollision(nextX, nextY)) {
        throw new Error('ship cannot collide with other ships');
      }
      shipLocation.push([nextX, nextY]);
      board[nextX][nextY] = ship.id;
    }
    ships.push(ship);
    return shipLocation;
  }

  function isValidPlacement(ship, orientation, x, y) {
    if (orientation === 'x' && x + ship.length > 10) {
      return false;
    }
    if (orientation === 'y' && y + ship.length > 10) {
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
      return misses;
    } else {
      const hitShip = ships.find((ship) => ship.id === board[x][y]);
      hitShip.hit();
      if (hitShip.isSunk()) {
        updateStats(hitShip.id);
      }
      return hitShip.hits;
    }
  }

  function lost() {
    for (let ship of ships) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }

  function clear() {
    board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
  }

  return {
    misses,
    placeShip,
    receiveAttack,
    lost,
    clear,
    board,
  };
}
