/**
 * 思路：
 * 贪心一：优先取最小的负数取反
 * 贪心二：如果全部变为正数，就将剩余的取反次数消耗到最小的正数上
 * 将数组按绝对值有大到小排列，遇到负数消耗k取反
 */
const largestSumAfterKNegations = function(nums, k) {
  nums.sort((a,b) => Math.abs(b)-Math.abs(a));
  console.log(nums)
  let sum = 0;
  for(let i=0; i<nums.length; i++) {
      if(nums[i] < 0 && k-- > 0) {
          nums[i] = -nums[i]
      }
      sum += nums[i]
  };
  if(k % 2 > 0) {
      sum -= 2 * nums[nums.length-1]
  }
  return sum
};

console.log(largestSumAfterKNegations([ -8, -5, -5, 3, -3, -2 ], 6))