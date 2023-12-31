/**
 * dp项含义：dp[j] j容量下可以凑成的组合数
 * 递推公式：组合情况：dp[j] += dp[j-num[i]];
 * 初始化：求组合需要累加，所以dp[0]=1
 */
const change = function(amount, coins) {
  const dp = new Array(amount+1).fill(0);
  dp[0] = 1
  for(let i=0; i<coins.length; i++) {
      for(let j=coins[i]; j<= amount; j++) {
          dp[j] += dp[j-coins[i]]
      }
  }
  return dp[amount]
};