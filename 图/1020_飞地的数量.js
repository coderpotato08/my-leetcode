//思路：用dfs把边缘的岛屿都给置为0，然后剩下的就是中间的飞地
//     之后再从边界内部开始一次遍历，遇到1就count++
const numEnclaves = function(grid) {
  let count = 0
  const n = grid.length, m = grid[0].length;
  const dfs = function(x,y) {
      if(x<0 || x>=n || y<0 || y>=m || grid[x][y] == 0) return;
      grid[x][y]=0;
      count++;
      dfs(x-1,y);
      dfs(x+1,y);
      dfs(x,y-1);
      dfs(x,y+1);
  }
  // 处理上下边界贴边岛屿
  for(let i=0; i<n; i++) {
      if(grid[i][0] == 1) dfs(i, 0);
      if(grid[i][m-1] == 1) dfs(i, m-1);
  }
  // 处理左右边界贴边岛屿
  for(let j=0; j<m; j++) {
      if(grid[0][j] == 1) dfs(0, j);
      if(grid[n-1][j] == 1) dfs(n-1, j);
  }
  count = 0 // 重制count
  for(let i=1; i<n-1; i++) {
      for(let j=1; j<m-1; j++) {
          if(grid[i][j] == 1) count++
      }
  }
  return count
};