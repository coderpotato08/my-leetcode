/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，
 * 这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 */

/**
 * dp项含义：dp[i]当前房屋所能盗得最大金额
 * 递推公式：需要考虑两种情况：算头不算尾，算尾不算头，然后两种情况取最大值。
 * 算头不算尾 robRange(nums, 0, len-2) 算尾不算头 robRange(nums, 1, len-1)
 * 初始化：与打家劫舍I一样：dp[start] = nums[start] dp[start+1] = max(nums[start], nums[start+1])
 * 递推公式：与打家劫舍I一样：dp[i] = max(dp[i-2] + nums[i], dp[i-1])
 */
const rob = function(nums) {
  const len = nums.length;
  if(len == 0) return 0;
  if(len == 1) return nums[0]
  const startMax = robRange(nums, 0, len-2);
  const endMax = robRange(nums, 1, len-1);
  return startMax > endMax ? startMax : endMax
};
const robRange = function(nums, start, end) {
  if(start === end) return nums[start]
  const dp = new Array(nums.length).fill(0);
  dp[start] = nums[start];
  dp[start+1] = Math.max(nums[start], nums[start+1]);
  for(let i=start+2; i<=end; i++) {
      dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1]);
  }
  return dp[end]
}

console.log(rob([1,2,3,1]))
