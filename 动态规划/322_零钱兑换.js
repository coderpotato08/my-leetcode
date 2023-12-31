/**
 * dp项含义 dp[j]凑满总额为j所需的最少新币数
 * 递推公式 dp[j] = min(dp[j], dp[j-num[i]]+1)
 * 初始化
 */
const coinChange = function(coins, amount) {
  const dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0;
  if(!amount) {
      return 0;
  }
  for(let i=0; i<coins.length; i++) {
      for(let j=coins[i]; j<= amount; j++) {
          dp[j] = Math.min(dp[j], dp[j-coins[i]]+1)
      }
  }
  return dp[amount] == Infinity ? -1 : dp[amount]
};