import { player1, player2, turn } from '../index.js';

function renderBoard(player) {
  const board = document.createElement('div');
  board.classList.add('board');

  for (let row = 0; row < player.gameboard.size; row++) {
    for (let col = 0; col < player.gameboard.size; col++) {
      const cell = document.createElement('button');
      cell.classList.add('cell');
      cell.dataset.x = col;
      cell.dataset.y = row;
      if (player.gameboard.board[col][row] !== null) {
        cell.classList.add('ship');
      } else {
        cell.classList.add('empty');
      }
      if (player.name === 'player') {
        cell.disabled = true;
      }
      board.appendChild(cell);
    }
  }
  const { xAxisDiv, yAxisDiv } = renderAxes();
  const boardContainer = document.querySelector(`.${player.name}.gameboard`);
  boardContainer.innerHTML = '';
  boardContainer.append(xAxisDiv, yAxisDiv, board);
}

function renderAttack(cell) {
  if (cell.classList.contains('ship')) {
    cell.classList.remove('ship');
    cell.classList.add('hit');
  } else {
    cell.classList.add('miss');
  }
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
  const opponent = turn === player1 ? player2 : player1;
  const shipName = document.querySelector(`.${opponent.name} .${shipId}`);
  shipName.classList.add('strikethrough');
}

function clearStats() {
  const stats = document.querySelectorAll('li');
  stats.forEach((stat) => {
    stat.classList.remove('strikethrough');
  });
}

function gameOver(winner) {
  const dialog = document.querySelector('dialog');
  dialog.style.display = 'grid';
  const winnerDiv = document.querySelector('.winner');
  winnerDiv.textContent = `${winner.name} wins!`;
  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', () => {
    dialog.style.display = 'none';
  });
}

export { renderBoard, renderAttack, updateStats, clearStats, gameOver };
