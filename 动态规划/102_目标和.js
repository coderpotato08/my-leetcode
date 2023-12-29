/**
 * 思路：每个元素前面都可以添加 + 或者 - ，那其实也就可以分为两个集合，+集合left和-集合right
 * 根据 left + right = sum； left - right = target 得出 left = (sum + target) / 2
 * 我们只需要求出满足条件的left个数即可。
 * 当然要考虑到不能整除的情况，不能整除的情况实际上就是无组合的情况，直接返回0
 * dp项的含义：容量为j的情况下有几种组合方式
 * 递推公式 dp[j] = dp[j] + dp[j-num[i]] 排列组合
 * 初始化 dp[0]=1
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function(nums, target) {
  let sum = nums.reduce((a,b)=>a+=b, 0);
  if((sum+target) % 2 > 0) return 0 //无组合
  let leftSum = (sum+target)/2, res=0;
  const dp = new Array(leftSum+1).fill(0);
  dp[0] = 1
  for(let i=0; i<nums.length; i++) {
      for(let j=leftSum; j>=nums[i]; j--) {
          dp[j] += dp[j-nums[i]]
      }
  }
  return dp[leftSum]
};
