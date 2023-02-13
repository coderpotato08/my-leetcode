function NumMatrix(matrix) {
  let rows = 0, cols = 0;
  if(matrix.length == 0) {
    rows = cols = 1;
  } else {
    rows = matrix.length + 1;
    cols = matrix[0].length + 1;
  }
  const preSum = new Array(rows)
  for (let i = 0; i < rows; i++) {
    preSum[i] = new Array(cols)
  }
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if(i==0 || j==0) {
        preSum[i][j] = 0
      } else {
        preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] - preSum[i-1][j-1] + matrix[i-1][j-1]
      };
    }
  }
  this.preSum = preSum
};

NumMatrix.prototype.sumRegion = function(x1, y1, x2, y2) {
  return this.preSum[x2+1][y2+1] - this.preSum[x1][y2+1] - this.preSum[x2+1][y1] + this.preSum[x1][y1]
};

let matrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]])

console.log(matrix.sumRegion([2,1,4,3]))
