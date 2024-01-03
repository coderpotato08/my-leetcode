/**
 * dp项含义：以i结尾最长递增连续子序列
 * 递推公式 if(num[i]>nums[i-1]) dp[i]=dp[i-1]+1
 * 初始化 1
 */
const findLengthOfLCIS = function(nums) {
  let res = 1
  const dp = new Array(nums.length).fill(1)
  for(let i=1; i<nums.length; i++) {
      if(nums[i]>nums[i-1]) dp[i] = dp[i-1]+1;
      res = dp[i] > res ? dp[i] : res
  }
  return res
};

console.log(findLengthOfLCIS([1,3,5,4,7]))