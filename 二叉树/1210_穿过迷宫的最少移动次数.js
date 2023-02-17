function minimumMoves(grid) { // 广度优先遍历
  let r = grid.length, c = grid[0].length;
  let queue = [[0,0,0,1,0]];
  let hash = new Map();
  while(queue.length) {
    const [i1, j1, i2, j2, step] = queue.shift();
    if(i1 == r - 1 && j1 == c - 2 && i2 == r - 1 && j2 == c - 1) return step;
    let str = [i1, j1, i1, j2].join()
    if (hash.has(str)) continue;
    hash.set(str, true)
    if (i1 == i2) {
      // 平行
      if(i1 < r - 1 && grid[i1 + 1][j1] == 0 && grid[i2 + 1][j2] == 0) {
        queue.push([i1+1, j1, i2+1, j2, step+1]); // 向下水平移动
        queue.push([i1, j1, i2+1, j2-1, step+1]); // 顺时针旋转
      }
      if(j2 < c - 1 && grid[i1][j2 + 1] == 0) {
        queue.push([i1, j2, i1, j2 + 1, step+1]); // 向右移动
      }
    } else {
      // 垂直
      if(j1 < c - 1 && grid[i1][j1+1] == 0 && grid[i2][j2+1] == 0) {
        queue.push([i1, j1+1, i2, j2+1, step+1]); // 向右水平移动
        queue.push([i1, j1, i2-1, j2+1, step+1]); // 逆时针旋转
      }
      if(i2 < r - 1 && grid[i2 + 1][j2] == 0) {
        queue.push([i2, j2, i2+1, j2, step+1]); // 向下移动
      }
    }
  }
  return -1
};
