/**
 * dp项含义：dp[i][0]不操作； dp[i][1]第一次持有； dp[i][2]第一次不持有； dp[i][3]第二次持有； dp[i][4]第二次不持有；
 * 递推公式：
 * dp[i][0] = dp[i-1][0] = 0
 * dp[i][1] = max(dp[i-1][1], dp[i-1][0]-price[i])
 * dp[i][2] = max(dp[i-1][2], dp[i-1][1]+price[i])
 * dp[i][3] = max(dp[i-1][3], dp[i-1][2]-price[i])
 * dp[i][4] = max(dp[i-1][2], dp[i-1][3]+price[i])
 * 
 * 初始化：
 * dp[0][0] = 0 
 * dp[0][1]=-prices[0] 第一天买入
 * dp[0][2]=0 第二天卖出
 * dp[0][3]=-prices[0] 第三天买入
 * dp[0][4]=0 第四天卖出
 */
const maxProfit = function(prices) {
  const len = prices.length;
  const dp = new Array(5).fill(0);
  dp[1] = -prices[0];
  dp[3] = -prices[0];
  for(let i=1; i<len; i++) {
      dp[1] = Math.max(dp[1], -prices[i]);    // 第一次持有状态
      dp[2] = Math.max(dp[2], dp[1]+prices[i]);   // 第一次未持有状态
      dp[3] = Math.max(dp[3], dp[2]-prices[i]);   // 第二次持有状态
      dp[4] = Math.max(dp[4], dp[3]+prices[i]);   // 第二次未持有状态
  }
  return dp[4]
};

console.log(maxProfit([3,3,5,0,0,3,1,4]))