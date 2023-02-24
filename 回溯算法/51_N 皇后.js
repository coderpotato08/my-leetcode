function solveNQueens(n) {
  let res = []
  let board = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  backTrack(board, 0, res);
  return res;
};
function backTrack(board, row, res) {
  if(row === board.length) {
    res.push(board.map(item => item.join("")));
    return;
  }
  for(let col = 0; col < board.length; col++) {
    if(!isValid(board, row, col)) continue;
    board[row][col] = "Q";
    backTrack(board, row+1, res);
    board[row][col] = ".";
  }
}
function isValid(board, row, col) {
  let n = board.length;
  for(let i = 0; i <= row; i++) {
    if(board[i][col] === "Q") return false;
  }
  for(let i = row-1, j = col+1; i >= 0 && j < n; i--, j++) {
    if(board[i][j] === "Q") return false;
  }
  for(let i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--) {
    if(board[i][j] === "Q") return false;
  }
  return true;
}

solveNQueens(4)
