import Gameboard from '../gameboard';
import Ship from '../ship';

describe('Gameboard', () => {
  const gameboard = Gameboard();
  const battleship = Ship('battleship', 4);
  const destroyer = Ship('destroyer', 2);

  describe('battleship at D7', () => {
    test('place battleship at D7 in the x-direction', () => {
      gameboard.placeShip(battleship, 'x', 6, 3);

      expect(
        gameboard.board[6][3] &&
          gameboard.board[7][3] &&
          gameboard.board[8][3] &&
          gameboard.board[9][3]
      ).toBe('battleship');
    });
  });

  describe('destroyer at G1', () => {
    gameboard.placeShip(destroyer, 'y', 0, 8);

    test('place destroyer at G1 in the y-direction', () => {
      expect(gameboard.board[0][8] && gameboard.board[0][9]).toBe('destroyer');
    });

    test('receive attack at ship location', () => {
      gameboard.receiveAttack(0, 8);
      expect(destroyer.hits).toBe(1);
    });

    test('receive attack at unoccupied location', () => {
      gameboard.receiveAttack(1, 8);
      expect(gameboard.misses).toEqual([[1, 8]]);
    });

    test('not all ships have been sunk', () => {
      destroyer.hit();
      battleship.hit();
      battleship.hit();
      expect(gameboard.lost()).toBe(false);
    });

    test('all ships have been sunk', () => {
      battleship.hit();
      battleship.hit();
      expect(gameboard.lost()).toBe(true);
    });
  });

  describe('invalid placements', () => {
    const cruiser = Ship('cruiser', 3);

    test('ship is not fully on the board', () => {
      expect(() => gameboard.placeShip(cruiser, 'y', 5, 9)).toThrow(
        /cannot go off board/
      );
    });

    test('ship collides with another ship', () => {
      const submarine = Ship('submarine', 3);
      gameboard.placeShip(cruiser, 'y', 5, 5);
      expect(() => gameboard.placeShip(submarine, 'x', 5, 7)).toThrow(
        /cannot collide/
      );
    });
  });
});
