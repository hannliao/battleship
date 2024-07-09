const Gameboard = require('../gameboard');
const Ship = require('../ship');

describe('Gameboard', () => {
  const gameboard = Gameboard();
  let battleship;

  beforeEach(() => {
    battleship = Ship('battleship', 4);
  });

  describe('ship at D7', () => {
    test('place ship at D7 in the x-direction', () => {
      const shipLocation = gameboard.placeShip(battleship, 'x', 6, 3);

      expect(shipLocation).toEqual([
        [6, 3],
        [7, 3],
        [8, 3],
        [9, 3],
      ]);
    });
  });

  describe('ship at G1', () => {
    let shipLocation;

    beforeEach(() => {
      shipLocation = gameboard.placeShip(battleship, 'y', 0, 6);
    });

    test('place ship at G1 in the y-direction', () => {
      expect(shipLocation).toEqual([
        [0, 6],
        [0, 7],
        [0, 8],
        [0, 9],
      ]);
    });

    test('receive attack at ship location', () => {
      let hits = gameboard.receiveAttack(0, 8);
      expect(hits).toBe(1);
    });

    test('receive attack at unoccupied location', () => {
      let misses = gameboard.receiveAttack(1, 8);
      expect(misses).toEqual([[1, 8]]);
    });
  });
});
