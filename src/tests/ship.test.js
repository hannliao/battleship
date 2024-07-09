const Ship = require('../ship');

describe('Ship', () => {
  const ship = Ship('battleship', 4);

  test('get length', () => {
    expect(ship.length).toBe(4);
  });

  test('records hits', () => {
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test('is not sunk by insufficient hits', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('is sunk by sufficient hits', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
