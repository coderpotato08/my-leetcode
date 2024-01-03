// 暴力穷举
const lengthOfLIS = function(nums) {
  let max = 0
  const l = (arr, n) => {
    if (n === arr.length - 1) {
      return 1;
    }
    let maxLen = 1;
    for (let i = n + 1; i < arr.length ; i++) {
      if (arr[i] > arr[n]) {
        maxLen = Math.max(maxLen, l(arr, i) + 1)
      }
    }
    return maxLen
  }
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, l(nums, i) )
  }
  console.log(max)
};

/**
 * dp含义：dp[i]以i为结尾的最长递增子序列长度
 * 递推公式 if(nums[j]<nums[i]) dp[i] = max(dp[i], dp[j]+1)
 * 初始化 默认包含nums[i]本身 所以都初始成1
 * 遍历：由于dp[i]的定义是以i为结尾的最长递增子序列长度，因此每个dp[i]都需要进行最大值比较，确保最终得到的长度是最大的
 */
const lengthOfLIS2 = function(nums) {
  let res = 1
  const dp = new Array(nums.length).fill(1);
  for(let i=0; i<nums.length; i++) {
      for(let j=0; j<i; j++) {
          if(nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j]+1)
          }
          res = Math.max(res, dp[i]);
      }
  }
  return res
};

const arr1 = []
lengthOfLIS(arr1)