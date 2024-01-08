const island1 = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
];
const island2 = [[0,0,0,0,0,0,0,0]]
const maxAreaOfIsland = function(grid) {
  let max = 0;
  const path = [[0,1], [1,0], [0,-1], [-1,0]]
  const visited = new Array(grid.length).fill().map(()=>new Array(grid[0].length).fill(false));
  const dfs = function(x, y, m) {
      for(let k=0; k<path.length; k++) {
          let nextX = x + path[k][0], nextY = y + path[k][1];
          if(nextX < 0 || nextY < 0 || nextX >= grid.length || nextY >= grid[0].length) {
              continue;
          }
          if(!visited[nextX][nextY] && grid[nextX][nextY] == 1) {
              visited[nextX][nextY] = true
              m = dfs(nextX, nextY, m+1)
          }
      }
      return m
  }
  for(let i=0; i<grid.length; i++) {
      for(let j=0; j<grid[0].length; j++) {
          if(!visited[i][j] && grid[i][j] == 1) {
              visited[i][j] = true
              // 计算岛屿面积
              const square = dfs(i,j,1);
              max = square > max ? square : max
          }
      }
  }
  return max
};

// 空间优化
// 节点的visited直接作用到grid上
const maxAreaOfIsland2 = function(grid) {
  let max = 0;
  const n = grid.length, m = grid[0].length;
  const getArea = function(x, y) {
      if(x<0 || x>=n || y<0 || y>=m || grid[x][y]==0 || grid[x][y] == -1) return 0;
      grid[x][y] = -1;
      return 1 + getArea(x-1,y) + getArea(x+1,y) + getArea(x,y-1) + getArea(x,y+1)
  }
  for(let i=0; i<n; i++) {
      for(let j=0; j<m; j++) {
          if(grid[i][j] == 1) {
              // 计算岛屿面积
              max = Math.max(max, getArea(i,j))
          }
      }
  }
  return max
};

console.log(maxAreaOfIsland(island1))