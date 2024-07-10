export default function Gameboard() {
  let board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
  let misses = [];
  let ships = [];

  function placeShip(ship, orientation, x, y) {
    let shipLocation = [[x, y]];
    board[x][y] = ship.id;

    for (let i = 1; i < ship.length; i++) {
      let coord = orientation === 'x' ? [x + i, y] : [x, y + i];
      board[coord[0]][coord[1]] = ship.id;
      shipLocation.push([coord[0], coord[1]]);
    }
    ships.push(ship);
    return shipLocation;
  }

  function receiveAttack(x, y) {
    if (board[x][y] === null) {
      misses.push([x, y]);
      return misses;
    } else {
      const hitShip = ships.find((ship) => ship.id === board[x][y]);
      hitShip.hit();
      console.log(`ship ${hitShip.id} has been hit`);
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
  };
}

module.exports = Gameboard;
