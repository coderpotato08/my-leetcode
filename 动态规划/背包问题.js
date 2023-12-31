/**
 * 0-1背包问题
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

// 完全背包问题:与0-1背包的区别就是物品可以多选，j容量的遍历从小开始，与0-1相反
// 需要分场景
// 如果是求dp[j]完全背包j容量下的对大价值，那么对于遍历顺序没有要求
// 如果是求dp[j]完全背包j容量下装满能有多少种情况，就需要根据是 组合数 还是 排列数来决定遍历顺序
function testWeightBagProblem3 (weight, value, size) {
  const len = weight.length,
    dp = new Array(size+1).fill(0);
  for(let i=0; i<len; i++) {
    for(let j=weight[i]; j <= size; j++) {  //完全背包问题的背包遍历顺序与01相反，因为物品可以取多次
      dp[j] = Math.max(dp[j], dp[j-weight[i]] + value[i])
    }
  }
  return dp[size]
}