/**
 * dp项含义：dp[i][j]: s前i个字符，t前j个字符，s子序列中t出现的个数
 * 递推公式：if(s[i-1] == t[j-1]) dp[i][j] = dp[i-1][j] + dp[i-1][j-1]
 * else dp[i][j] = dp[i-1][j]
 * 初始化 dp[i][0] = 1(s中出现""空字符串的次数) dp[0][j] = 0(""空字符串中出现t的次数);
 */
 /**
 * dp[0][0]=1, 表示s前0个字符为''，t前0个字符为''
*/
cost numDistinct = function(s, t) {
  const l1 = s.length, l2 = t.length;
  const dp = new Array(l1+1).fill().map(() => new Array(l2+1).fill(0));
  for(let i = 0; i <=l1; i++) {
      dp[i][0] = 1;
  }
  for(let i=1; i<=l1; i++) {
    for(let j=1; j<=l2; j++) {
        if(s[i-1] == t[j-1]) {
            dp[i][j] = dp[i-1][j] + dp[i-1][j-1]
        } else {
            dp[i][j] = dp[i-1][j]
        }
    }
  }
  return dp[l1][l2]
};

console.log("babgbag", "bag")