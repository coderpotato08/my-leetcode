/**
 * dp项含义 dp[i][j]：text1[0,i-1]与text2[0,j-1]下最长公共子序列
 * 递推公式：if(text1[i-1] === text2[j-1]) dp[i][j] = dp[i-1][j-1]+1 
 * else dp[i][j] = max(dp[i-1][j], dp[i][j-1])
 * 初始化：都为0
 */
const longestCommonSubsequence = function(text1, text2) {
  const l1 = text1.length, l2 = text2.length;
  const dp = new Array(l1+1).fill().map(() => new Array(l2+1).fill(0));
  for(let i=1; i<=l1; i++) {
      for(let j=1; j<=l2; j++) {
          if (text1[i-1] === text2[j-1]) {
              dp[i][j] = dp[i-1][j-1]+1
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
          }
      }
  }
  return dp[l1][l2]
};