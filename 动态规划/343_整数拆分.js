/**
 * 1.dp[i]: 当前数i拆分后的最大乘积
 * 2.状态转移方程
 * dp[i] = max(j*(i-i), j*dp[i-j], dp[i]) dp[i]算进去是因为dp[i]相当于在每次遍历j拆分i时上次拆分所计算下来的最大值，所以在取最大值时也要算在内也要
 * 3.初始化状态， dp[0] = dp[1] = 0, dp[2] = 1
 */
const integerBreak = function(n) {
  const dp = new Array(n+1).fill(0);
  dp[2] = 1;
  for(let i=3; i <=n; i++) {
      for(let j=1; j <= i/2; j++) {
          dp[i] = Math.max(dp[i], j*(i-j), j*dp[i-j]);
      }
  }
  return dp[n]
};