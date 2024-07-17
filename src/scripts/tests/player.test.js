import Player from '../player';
import Ship from '../ship';

describe('Player', () => {
  const player1 = Player('player');
  const player2 = Player('computer');

  test("access player's gameboard", () => {
    const carrier = Ship('carrier', 5);
    player1.gameboard.placeShip(carrier, 'y', 7, 5);

    expect(player1.gameboard.board[7][5]).toBe('carrier');
  });

  test('launch attack', () => {
    const submarine = Ship('submarine', 3);
    player2.gameboard.placeShip(submarine, 'x', 3, 6);
    player1.attack(4, 6, player2);
    expect(submarine.hits).toBe(1);
  });
});
