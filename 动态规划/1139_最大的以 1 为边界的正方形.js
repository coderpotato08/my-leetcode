/*
* left[i][j]      >=  l
* up[i][j]        >=  l
* left[i-l+1][j]  >=  l
* up[i][j-l+1]    >=  l
* */
function largest1BorderedSquare(grid) {
  const m = grid.length, n = grid[0].length;
  const left = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
  const up = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
  let maxBorder = 0;
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(grid[i-1][j-1] === 1) {
        // 以[i-1][j-1]为起点的左侧连续1个数，和上侧连续1个数
        left[i][j] = left[i][j-1] + 1;  //前缀和 记录grid[i-1][j-1] left出现连续1的个数 + 当前grid[i-1][j-1]位置的1
        up[i][j] = up[i-1][j] + 1;  //前缀和 记录grid[i-1][j-1] up出现连续1的个数 + 当前grid[i-1][j-1]位置的1
        let border = Math.min(left[i][j], up[i][j]);  // 求出以[i-1][j-1]为出发点的left 和 up 中的出现1的最小值
        while (left[i - border + 1][j] < border || up[i][j - border + 1] < border) {
          border --
        }
        maxBorder = Math.max(maxBorder, border)
      }
    }
  }
  return maxBorder * maxBorder
};
