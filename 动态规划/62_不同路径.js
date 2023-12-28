/**
 * 初始化 第一行都为1， 第一列也都为1，因为只能向下或向右
 * 状态转移方程：dp[i][j] = dp[i-1][j] + dp[i][j-1];
 * 可以优化空间为一维数组
 * 状态转移方程：dp[i] = dp[i] + dp[i-1]
 */
const uniquePaths = function(m, n) {
  const dp = new Array(n).fill(1);
  for(let i = 1; i < m; i++) {
      for(let j = 1; j < n; j++) {
          dp[j] = dp[j - 1] + dp[j];
      }
  }
  return dp[n-1]
};