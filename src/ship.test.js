const Ship = require('./ship');

test('ship records hits', () => {
  const battleship = Ship('battleship', 4);
  battleship.hit();
  battleship.hit();
  expect(battleship.hits).toBe(2);
});

test('ship is sunk', () => {
  const submarine = Ship('submarine', 3);
  submarine.hit();
  submarine.hit();
  submarine.hit();
  expect(submarine.isSunk()).toBe(true);
});

test('ship is not sunk', () => {
  const carrier = Ship('carrier', 5);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBe(false);
});
