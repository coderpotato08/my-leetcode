/**
 * 思路：与最长公共子序列问题相同
 * dp项含义：dp[i][j] nums1[0, i-1]nums2[0, j-1]之间最长公共子序列长度
 * 递推公式 if(nums1[i-1] == nums2[j-1]) dp[i][j] = dp[i-1][j-1] + 1
 else dp[i][j] = max(dp[i-1][j], dp[i][j-1])
 * 初始化 都为0
 * 遍历顺序：
 */
 const maxUncrossedLines = function(nums1, nums2) {
  const l1 = nums1.length, l2 = nums2.length;
  const dp = new Array(l1+1).fill().map(() => new Array(l2+1).fill(0));
  for(let i=1; i<=l1; i++) {
     for(let j=1; j<=l2; j++) {
         if(nums1[i-1] == nums2[j-1]) {
              dp[i][j] = dp[i-1][j-1] + 1
         } else {
             dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
         }
     }
  }
  return dp[l1][l2]
};