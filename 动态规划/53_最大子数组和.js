/**
 * dp项含义：以nums[i]结尾的最大子数组和
 * 递推公式：dp[i] = max(dp[i-1]+nums[i], nums[i])
 * 初始化：dp[i]为nums[i]
 */
const maxSubArray = function(nums) {
  let len = nums.length, res = nums[0];
  const dp = new Array(len).fill(0);
  dp[0] = nums[0]
  for(let i=1; i<len; i++) {
      dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
      res = dp[i] > res ? dp[i] : res
  }
  return res
};