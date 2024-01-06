/**
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * 
 * 示例
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 */

/**
 * dp含义：使以i-1结尾的word1和以j-1为结尾的word2相同的最少操作次数
 * 递推公式：
 * 注：当word2[i-1]和word2[j-1]不相等时，有 增/删/换 三个操作
 *。   增 和 删实际上是一样的，因为word1的增可以逆向为word2的删，而为word1的删也可以逆向为word2的增，因此删的情况就包括了增的情况
 * if(word2[i-1] == word2[j-1]) dp[i][j] = dp[i-1][j-1] 相同不操作
 * else dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+1)
 * 初始化dp[i][0] = i; dp[0][j] = j 空串对应非空串的最少操作次数为非空串的总长度。
 */
const minDistance = function(word1, word2) {
  const l1 = word1.length, l2 = word2.length;
  const dp = new Array(l1+1).fill().map(() => new Array(l2+1).fill(0));
  for(let i=0; i<=l1; i++) dp[i][0] = i;
  for(let j=0; j<=l2; j++) dp[0][j] = j;
  for(let i=1; i<=l1; i++) {
    for(let j=1; j<=l2; j++) {
        if(word1[i-1] == word2[j-1]) {
          dp[i][j] = dp[i-1][j-1]
        } else {
          dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+1)
        }
    }
  }
  return dp[l1][l2]
};