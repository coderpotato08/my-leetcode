// triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// 状态转移方程：dp[i][j] = min(dp[i+1][j], dp[i+1][j+1]) + dp[i][j];
const minimumTotal = function(triangle) {
  const h = triangle.length;
  const dp = new Array(h)
  for(let i = 0; i < h; i++) {
    dp[i] = [...triangle[i]]
  }
  for(let i = h-1; i >= 0; i--) {
    for(let j = 0; j < dp[i].length; j++) {
      if(i !== h - 1) {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j];
      }
    }
  }
  return dp[0][0]
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))