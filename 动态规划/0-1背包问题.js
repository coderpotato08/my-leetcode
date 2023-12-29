/**
 * 
 * @param {*} weight 重量
 * @param {*} value 价值
 * @param {*} size 背包大小
 */
function testWeightBagProblem (weight, value, size) {
  const len = weight.length,
    dp = new Array(len).fill().map(() => new Array(size+1).fill(0));
  // 初始化
  for(let i=weight[0]; i<=size; i++) {
    dp[0][i] = value[0]
  }
  // 遍历
  for(let i = 1; i < len; i++) {
    for(let j = 1; j <= size; j++) {
      if(j < weight[i]) {
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
      }
    }
  }
  return dp[len-1][size]
}

// 优化为一维数组，滚动数组
function testWeightBagProblem2 (weight, value, size) {
  const len = weight.length,
  // 初始化，由于一维的递推公式是dp[j] = max(dp[j], dp[j-weight[i]] + value[j]),由自身和他前面的进行比较，因此初始化为0
    dp = new Array(size+1).fill(0);
  for(let i=0; i<len; i++) {
    for(let j=size; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j-weight[i]] + value[i])
    }
  }
  return dp[size]
}

console.log(testWeightBagProblem2([1, 3, 4], [15, 20, 30], 4));