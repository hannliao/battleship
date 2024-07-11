function renderBoard(gameboard) {
  const board = document.createElement('div');

  for (let row = 0; row < gameboard.board.length; row++) {
    for (let col = 0; col < gameboard.board[row].length; col++) {
      const cell = document.createElement('button');
      cell.classList.add('cell');

      if (gameboard.board[row][col] !== null) {
        cell.classList.add('ship');
      } else {
        cell.classList.add('empty');
      }

      board.appendChild(cell);
    }
  }

  const gameContainer = document.querySelector('#game');
  gameContainer.innerHTML = '';
  gameContainer.appendChild(board);
}

export { renderBoard };
