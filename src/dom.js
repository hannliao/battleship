function renderBoard(gameboard) {
  const board = document.createElement('div');
  board.classList.add('board');

  for (let row = 0; row < gameboard.board.length; row++) {
    for (let col = 0; col < gameboard.board[row].length; col++) {
      const cell = document.createElement('button');
      cell.classList.add('cell');

      if (gameboard.board[col][row] !== null) {
        cell.classList.add('ship');
      } else {
        cell.classList.add('empty');
      }

      board.appendChild(cell);
    }
  }

  const { xAxisDiv, yAxisDiv } = renderAxes();
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('board-container');
  boardContainer.innerHTML = '';
  boardContainer.append(xAxisDiv, yAxisDiv, board);

  const gameContainer = document.querySelector('#game');
  gameContainer.appendChild(boardContainer);
}

function renderAxes() {
  const xAxisDiv = document.createElement('div');
  const xAxis = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  xAxis.forEach((num) => renderAxis(num, xAxisDiv));

  const yAxisDiv = document.createElement('div');
  const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  yAxis.forEach((letter) => renderAxis(letter, yAxisDiv));

  return { xAxisDiv, yAxisDiv };
}

function renderAxis(label, axisDiv) {
  const axis = document.createElement('div');
  axis.textContent = label;
  axisDiv.appendChild(axis);
  axisDiv.classList.add('axis');
}

export { renderBoard };
