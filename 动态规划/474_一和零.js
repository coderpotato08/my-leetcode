/**
 * dp项含义：由于背包装满条件是多维的有0和i，所以dp要定义成二维：dp[i][j] 装满i个0 j个1所需要的最大物品（子集）个数
 * 递推公式：dp[i][j] = max(dp[i][j], dp[i-x][j-y]+1) x，y分别为当前子集有几个0和1
 * 解释一下递推公式，dp[i][j]为不选，dp[i-x][j-y]+1为选，选的情况其实就是上一个状态（dp[i-x][j-y]）加上当前选的物品个数（也就是+1）
 * 初始化：首先dp[0][0] = 0, 非0下标与0-1背包类似，考虑到dp存在与当前状态的大小对比，为防止值被覆盖就都初始为0
 */
const findMaxForm = function(strs, m, n) {
  const dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0));
  let x,y;
  for(let str of strs) {
      x=0;
      y=0;
      for(let char of str) {
          char == '0' ? x++ : y ++
      }
      for(let i=m; i>=x; i--) {
          for(let j=n; j>=y; j--) {
              dp[i][j] = Math.max(dp[i][j], dp[i-x][j-y]+1)
          }
      }
  }
  return dp[m][n]
};