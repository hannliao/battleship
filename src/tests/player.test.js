import Player from '../factories/player';
import Ship from '../factories/ship';

describe('Player', () => {
  test("access player's gameboard", () => {
    const player1 = Player('user');
    const carrier = Ship('carrier', 5);
    player1.gameboard.placeShip(carrier, 'y', 7, 5);

    expect(player1.gameboard.board[7][5]).toBe('carrier');
  });
});
