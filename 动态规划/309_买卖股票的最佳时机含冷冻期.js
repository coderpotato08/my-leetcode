// 二维，思路请查看README（image-2.png）
const maxProfit1 = function(prices) {
  if(prices.length < 2) {
      return 0
  } else if(prices.length < 3) {
      return Math.max(0, prices[1] - prices[0])
  }
  const dp = Array.from(new Array(prices.length), () => new Array(4).fill(0));
  dp[0][0] = -prices[0]
  for(let i=1; i<prices.length; i++) {
      dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]-prices[i], dp[i-1][3]-prices[i]);
      dp[i][1] = Math.max(dp[i-1][1], dp[i-1][3]);
      dp[i][2] = dp[i-1][0] + prices[i];
      dp[i][3] = dp[i-1][2];
  }
  return Math.max(
      dp[prices.length-1][1],
      dp[prices.length-1][2],
      dp[prices.length-1][3],
  )
};

const maxProfit2 = function(prices) {
  if(prices.length < 2) {
      return 0
  } else if(prices.length < 3) {
      return Math.max(0, prices[1] - prices[0])
  }
  const dp = new Array(4).fill(0);
  dp[0] = -prices[0]
  for(let i=1; i<prices.length; i++) {
      let temp0 = dp[0], temp2 = dp[2] // 缓存上层遍历值
      dp[0] = Math.max(dp[0], dp[1]-prices[i], dp[3]-prices[i]);
      dp[1] = Math.max(dp[1], dp[3]);
      dp[2] = temp0 + prices[i];
      dp[3] = temp2;
      console.log(dp)
  }
  return Math.max(dp[1], dp[2], dp[3])
};