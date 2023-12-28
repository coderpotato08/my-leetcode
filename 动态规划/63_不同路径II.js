/**
 * 状态方程与62相同
 * 由于存在障碍所以要考虑存在障碍的点如何计算状态，同时初始化也得考虑到存在障碍的情况
 * 行列初始化是一旦遇到障碍，后续位置状态都为0
 * 遍历时，当遇到障碍节点说明当前节点无法到达，直接为0
 * @returns 
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  const dp = new Array(m);
  for (let i = 0; i < m; i++) dp[i] = new Array(n);
  // 起始位置，终止位置有障碍，直接路径为0
  if (obstacleGrid[0][0] == 1 || obstacleGrid[m-1][n-1] == 1) return 0;
  dp[0][0] = 1
  // 初始化第一行，障碍位及其后续都为0
  for(let i=1; i < n; i++) {
      dp[0][i] = obstacleGrid[0][i] == 1 || dp[0][i-1] == 0 ? 0 : 1
  }
  // 初始化第一列，障碍位及其后续都为0
  for(let i=1; i < m; i++) {
      dp[i][0] = obstacleGrid[i][0] == 1 || dp[i-1][0] == 0 ? 0 : 1
  }
  // 遍历
  for(let i=1; i<m; i++) {
      for(let j=1; j<n; j++) {
          if(obstacleGrid[i][j] == 1) {
              dp[i][j] = 0
          } else {
              dp[i][j] = dp[i][j-1] + dp[i-1][j]
          }
      }
  }
  return dp[m-1][n-1]
};