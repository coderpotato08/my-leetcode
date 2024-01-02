/**
 * 本题与买卖1的区别就在于可以多次买卖
 * 因为买卖1只允许一次买入卖出，所以当天买入股票的情况就是0-price[i]
 * 而本题允许多次，所以这个初始值就不应该是0，因为可能存在之前买入卖出的利润，所以得是之前未持股票的最大金（dp[i-1][1]）减去买入金
 */
const maxProfit = function(prices) {
  const len = prices.length;
  const dp = new Array(len).fill([0,0]);
  dp[0] = [-prices[0], 0];
  for(let i=1; i<len; i++) {
      dp[i] = [
          Math.max(dp[i-1][0], dp[i-1][1]-prices[i]),
          Math.max(dp[i-1][1], dp[i-1][0]+prices[i])
      ]
  }
  return dp[len-1][1]
};

console.log(maxProfit([7,1,5,3,6,4]))