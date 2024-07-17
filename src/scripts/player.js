import Gameboard from './gameboard';

export default function Player(name) {
  const gameboard = Gameboard();
  let attacks = new Set();

  function attack(x, y, opponent) {
    if (attacks.has(`${x},${y}`)) {
      throw new Error('cannot attack same spot twice');
    }
    opponent.gameboard.receiveAttack(x, y);
    attacks.add(`${x},${y}`);
  }
  return {
    name,
    gameboard,
    attack,
    attacks,
  };
}
