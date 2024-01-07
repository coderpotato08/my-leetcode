/**
 *给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
 */
/**
 * 输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
 * 输出：2
 * 解释：
 * 两个元组如下：
 * 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
 * 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
 */
const fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = new Map();
  let count = 0
  for(n1 of nums1) {
      for(n2 of nums2) {
          const sum = n1+n2
          map.set(sum, (map.get(sum) || 0)+1)
      }
  }
  for(n3 of nums3) {
      for(n4 of nums4) {
          const sum = 0-n3-n4;
          if(map.has(sum)) {
              count += map.get(sum)
          }
      }
  }
  return count
};