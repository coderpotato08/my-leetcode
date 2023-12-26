// 杨辉三角
// 状态转移方程
/**
 * dp[i][j] = 1   when j == 0 || j == dp[i].length - 1
 * dp[i][j] = dp[i-1][j-1] + dp[i-1][j]  
 */
const generate = function(numRows) {
  const dp = []
  for(let i = 0; i < numRows; i ++) {
      dp[i] = new Array(i+1).fill(1)
      for(let j = 1; j < dp[i].length; j++) {
          dp[i][j] = dp[i-1][j-1] + (dp[i-1][j] | 0)
      }
  }
  return dp
};