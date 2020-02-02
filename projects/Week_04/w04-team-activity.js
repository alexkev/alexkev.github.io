const board = document.querySelector('.board');
const resetButton = document.getElementById('reset');
let count = 0;
let onTouch = id => {
  if (count == 9) {
    resetBoard();
  }
  let box = document.getElementById(id);
  if (count % 2) {
    box.innerHTML = 'X';
    count++;
  } else {
    box.innerHTML = 'O';
    count++;
  }
};

function resetBoard() {
  console.dir(board);
  for (let i = 0; i < board.rows.length; i++) {
    let row = board.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      row.cells[j].innerHTML = '';
    }
  }
  count = 0;
}