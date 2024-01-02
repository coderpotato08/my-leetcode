/**
 * dp项含义 dp[i][j] 在第i天第j/2笔交易最大金
 * 递推公式：
 * dp[i][j] = max(dp[i-1][j], dp[i-1][j-1]-prices[i]) 
 * dp[i][j+1] = max(dp[i-1][j+1], dp[i-1][j]+prices[i])
 *
 * 初始化：
 * dp[i][0] 第i天未操作 都为0 j=0可以跳过遍历
 * dp[0][j] 第一天所有k次买卖内，买入的情况为-price[0]
 */
conat maxProfit = function(k, prices) {
  if(prices.length < 2) return 0
  const dp = Array.from(new Array(prices.length), () => new Array(2*k+1).fill(0));
  for(let j=1; j<2*k; j+=2) {
      dp[0][j] = -prices[0]
  }
  for(let i=1; i<prices.length; i++) {
      for(let j=1; j<2*k; j+=2) {
          dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-1]-prices[i])
          dp[i][j+1] = Math.max(dp[i-1][j+1], dp[i-1][j]+prices[i])
      }
  }
  return dp[prices.length-1][2*k]
};

console.log(maxProfit([3,2,6,5,0,3]))