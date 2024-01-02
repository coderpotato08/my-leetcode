/**
 * dp项含义：dp定义为二维数组 dp[i][0]标识第i天持有该股票最大金 dp[i][1]标识第i天不持有该股票最大金
 * 递推公式：
 * dp[i][0] = max(dp[i-1][0], -price[i]) dp[i-1][0] =>第i-1天也持有；-price[i] => 在第i天买入
 * dp[i][1] = max(dp[i-1][1], dp[i-1][0]+price[i]) dp[i-1][1] => 第i-1天也未持有；dp[i-1][0]+price[i] => 在第i天卖出
 * 初始化：dp[i]都是由dp[i-1]推导出，dp[0] = [-price[i], 0]
 */
const maxProfit = function(prices) {
  const len = prices.length;
  const dp = new Array(len).fill([0,0]);
  dp[0] = [-prices[0], 0];
  for(let i=1; i<len; i++) {
      dp[i] = [
          Math.max(dp[i-1][0], -prices[i]),
          Math.max(dp[i-1][1], dp[i-1][0]+prices[i])
      ]
  }
  return dp[len-1][1]
};

console.log(maxProfit([7,1,5,3,6,4]))