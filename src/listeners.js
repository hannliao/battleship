function addCellListeners(cell) {
  cell.addEventListener('click', () => {
    cell.disabled = true;
    // opponent receiveAttack(cell) ?
    if (cell.classList.contains('ship')) {
      cell.classList.add('hit');
    } else {
      cell.classList.add('miss');
    }
  });
}

export { addCellListeners };
