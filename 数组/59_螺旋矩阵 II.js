function generateMatrix (n) {
  let startX = 0, startY = 0;
  let loop = Math.floor(n / 2); //旋转圈数
  let mid = Math.floor(n / 2);  //中间位置
  let count = 1;  // 填充数字
  let offset = 1  // 控制每一层填充元素个数
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));
  while (loop --) {
    let col = startY, row = startX;
    for(;col < startY + n - offset; col ++) {
      result[row][col] = count ++;
    }
    for(;row < startX + n - offset; row ++) {
      result[row][col] = count ++;
    }
    for(;col > startY; col --) {
      result[row][col] = count ++;
    }
    for(;row > startX; row --) {
      result[row][col] = count ++;
    }
    startX ++;
    startY ++;
    offset += 2;
  }
  if (n % 2 !== 0) {
    result[mid][mid] = count;
  }
  return result;
};

console.log(generateMatrix(5));
