/**
 * 问题转化：是否存在 sum/2 的子集
 * 实际上就是01背包问题，数组元素为物品，重量和价值都为元素值
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((a,b) => a+=b, 0);
  if (sum & 1 == 1) return false  // 判断奇偶，和为奇数则不存在两个相同集合，直接false
  sum = sum / 2
  const dp = new Array(sum+1).fill(0);
  for(let i=0; i<= sum; i++) {
      for(let j=sum; j >= nums[i]; j--) {
          dp[j] = Math.max(dp[j], dp[j-nums[i]] + nums[i]);
          if(dp[j] === sum) return true
      }
  }
  return dp[sum] == sum
};