/**
 * dp项含义：dp[i][j] 以i-1结尾的word1与以j-1结尾的word2可以相同所需删去的最少字母数
 * 递推公式：if(word1[i-1] == word2[j-1]) dp[i][j] = dp[i-1][j-1]
*          else dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+1)
 * 初始化： dp[0][j] = j dp[i][0] = i dp[0][0] = 0 当中某个word为0，最小删除数为另一个字符串长度
 * 遍历：dp[i][j]都有之前的得出，所以由上到下由左到右
 */
const minDistance = function(word1, word2) {
  let l1 = word1.length, l2 = word2.length;
  const dp = new Array(l1+1).fill().map(() => new Array(l2+1).fill(0));
  for(let i=1; i<=l1; i++) {
      dp[i][0] = i
  }
  for(let i=1; i<=l2; i++) {
      dp[0][i] = i
  }
  for(let i=1; i<=l1; i++) {
      for(let j=1; j<=l2; j++) {
          if(word1[i-1] == word2[j-1]) {
              dp[i][j] = dp[i-1][j-1]
          } else {
              dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+2)
          }
      }
  }
  return dp[l1][l2]
};