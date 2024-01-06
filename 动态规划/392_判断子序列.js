/**
 * dp含义：dp[i][j]：以i-1结尾的s与j-1为结尾的t相同子序列长度
 * 递推公式：if(s[i-1] == t[j-1]) dp[i][j] = dp[i-1][j-1] + 1
 * else dp[i][j] = dp[i][j-1]
 */
const isSubsequence2 = function(s, t) {
  if(!s) return true
  const l1 = s.length, l2 = t.length;
  const dp = new Array(l1+1).fill().map(() => new Array(l2+1).fill(0));
  for(let i=1; i<=l1; i++) {
      for(let j=1; j<=l2; j++) {
          if (s[i-1] == t[j-1]) {
              dp[i][j] = dp[i-1][j-1] + 1
          } else {
              dp[i][j] = dp[i][j-1]
          }
      }
  }
  return dp[l1][l2] == l1
};

const isSubsequence2 = function(s, t) {
  if(!s) return true
  const l1 = s.length; l2 = t.length;
  const dp = new Array(l2+1).fill(0)
  for(let i=1; i<=l1; i++) {
      let prev=0, temp=0;
      for(let j=1; j<=l2; j++) {
          temp = dp[j]
          if (s[i-1] == t[j-1]) {
              dp[j] = prev + 1
          } else {
              dp[j] = dp[j-1]
          }
          prev = temp
      }
  }
  return dp[l2] == l1
};