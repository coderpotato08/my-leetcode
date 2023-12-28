/**
 * 本体只需要考虑布局，不需要考虑节点的数字
 * dp[i]: 整数i存在多少种二叉搜索树
 * 状态转移方程：dp[i] += dp[j] + dp[i-j-1]
 * 初始化：dp[0] = 1
 */
var numTrees = function(n) {
  const dp = new Array(n+1).fill(0);
  dp[0] = 1;
  for(let i=1; i<=n; i++) {
      for(let j=0; j<=i-1; j++) {
          dp[i] += dp[j] * dp[i-1-j];
      }
  }
  return dp[n]
};