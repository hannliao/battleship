import Gameboard from './gameboard';

export default function Player(name) {
  const gameboard = Gameboard();
  let attacks = [];

  function attack(x, y) {
    if (attacks.includes([x, y])) {
      throw new Error('cannot attack same spot twice');
    }
    attacks.push([x, y]);
  }
  return {
    name,
    gameboard,
    attack,
    attacks,
  };
}
