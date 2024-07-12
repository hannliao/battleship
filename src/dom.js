import { addCellListeners } from './listeners';

function renderBoard(player) {
  const board = document.createElement('div');
  board.classList.add('board');

  for (let row = 0; row < player.gameboard.board.length; row++) {
    for (let col = 0; col < player.gameboard.board[row].length; col++) {
      const cell = document.createElement('button');
      cell.classList.add('cell');

      if (player.gameboard.board[col][row] !== null) {
        cell.classList.add('ship');
      } else {
        cell.classList.add('empty');
      }

      if (player.name === 'player') {
        cell.disabled = true;
      }

      addCellListeners(cell);
      board.appendChild(cell);
    }
  }

  const { xAxisDiv, yAxisDiv } = renderAxes();
  const boardContainer = document.querySelector(`.${player.name}.gameboard`);
  boardContainer.innerHTML = '';
  boardContainer.append(xAxisDiv, yAxisDiv, board);
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

function updateStats(shipId) {
  const shipName = document.querySelector(`.${player.name} .${shipId}`);
  shipName.classList.add('strikethrough');
}

export { renderBoard, updateStats };
