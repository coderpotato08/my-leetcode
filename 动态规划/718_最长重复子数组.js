/**
 * dp项：nums1中以i-1为尾的且nums2中以j-1为尾的最长重复子串长度
 * 递推公式：if(nums1[i-1] === nums2[j-1]) dp[i][j] = dp[i-1][j-1] + 1
 * 初始化: i和j为0的情况是不可能达到的，因此初始化为最小值0，因为后续遍历达到条件会在上一基础上+1
 * 遍历：二维全部由小到大，一维需要从大到小，可以通过打印dp数组来观察区别
 */

const findLength1 = function(nums1, nums2) {
  const l1 = nums1.length, l2 = nums2.length;
  const dp = new Array(l1+1).fill().map(() => new Array(l2+1).fill(0));
  let res = 0;
  for(let i=1; i<=l1; i++) {
      for(let j=1; j<=l2; j++) {
          if(nums1[i-1] === nums2[j-1]) {
              dp[i][j] = dp[i-1][j-1] + 1
          }
          res = dp[i][j] > res ? dp[i][j] : res
      }
  }
  return res
};

const findLength2 = function(nums1, nums2) {
  const l1 = nums1.length, l2 = nums2.length;
  const dp = new Array(l2+1).fill(0);
  let res = 0;
  for(let i=1; i<=l1; i++) {
      for(let j=l2; j>0; j--) {
          if(nums1[i-1] === nums2[j-1]) {
              dp[j] = dp[j-1] + 1
          } else {
              dp[j] = 0
          }
          res = dp[j] > res ? dp[j] : res
      }
  }
  return res
};
