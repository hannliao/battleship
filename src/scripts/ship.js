export default function Ship(id, length) {
  let hits = 0;

  function hit() {
    hits += 1;
  }

  function isSunk() {
    return hits === length;
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
