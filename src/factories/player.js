import Gameboard from './gameboard';

export default function Player(name) {
  const board = Gameboard();
  let attacks = [];

  function attack(x, y) {
    if (attacks.includes([x, y])) {
      throw new Error('cannot attack same spot twice');
    }

    attacks.push([x, y]);
  }
  return {
    board,
    attack,
  };
}
