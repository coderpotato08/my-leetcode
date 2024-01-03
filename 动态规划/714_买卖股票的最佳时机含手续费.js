/**
 * 思路与买卖II一致，就只需要在卖出阶段减去手续费
 * dp含义：第i天的持股（dp[i][0]）/不持股（dp[i][1]）最大收益
 * 递推公式:
 * 持股：dp[i][0] = max(dp[i-1][0], dp[i-1][1]-prices[i])
 * 不持股：dp[i][1] = max(dp[i-1][1], dp[i-1][0]+prices[i]-fee)
 * 初始化：dp[0] = [-prices[0],0]
 */
const maxProfit = function(prices, fee) {
  const len = prices.length;
  let dp = [-prices[0],0];
  for(let i=1; i<len; i++) {
      dp = [
          Math.max(dp[0], dp[1]-prices[i]),
          Math.max(dp[1], dp[0]+prices[i]-fee)
      ]
  }
  return Math.max(dp[0], dp[1])
};