const Gameboard = require('../gameboard');
const Ship = require('../ship');

describe('Gameboard', () => {
  const gameboard = Gameboard();
  const battleship = Ship('battleship', 4);
  const destroyer = Ship('destroyer', 2);

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
    const shipLocation = gameboard.placeShip(destroyer, 'y', 0, 8);

    test('place ship at G1 in the y-direction', () => {
      expect(shipLocation).toEqual([
        [0, 8],
        [0, 9],
      ]);
    });

    test('receive attack at ship location', () => {
      gameboard.receiveAttack(0, 8);
      expect(destroyer.hits).toBe(1);
    });

    test('receive attack at unoccupied location', () => {
      let misses = gameboard.receiveAttack(1, 8);
      expect(misses).toEqual([[1, 8]]);
    });

    test('not all ships have been sunk', () => {
      battleship.hit();
      battleship.hit();
      expect(gameboard.lost()).toBe(false);
    });

    test('all ships have been sunk', () => {
      destroyer.hit();
      battleship.hit();
      battleship.hit();
      expect(gameboard.lost()).toBe(true);
    });
  });
});
