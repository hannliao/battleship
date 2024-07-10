export default function Ship(id, length) {
  let hits = 0;
  let sunk = false;

  function hit() {
    hits += 1;
  }

  function isSunk() {
    if (hits === length) sunk = true;
    return sunk;
  }

  return {
    id,
    length,
    hit,
    isSunk,
    get hits() {
      return hits;
    },
  };
}
