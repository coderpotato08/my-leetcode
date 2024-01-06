function minSubArrayLen(target, nums) { // 滑动窗口思路
  let l=0, r=0, sum=0;
  let minLen = Infinity;
  for(; r<nums.length; r++) {
      sum+=nums[r];
      while(sum >= target) {
          minLen = Math.min(minLen, r+1-l);
          sum-=nums[l++]
      }
  }
  return minLen == Infinity ? 0 : minLen
}