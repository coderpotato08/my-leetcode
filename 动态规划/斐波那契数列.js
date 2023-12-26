//滚动数组
const f_arr = (n) => {
  const dp = [1, 1];
  for(let i = 2; i < n; i++) {
    result = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = result;
  }
  return dp[1]
}

// 动态规划 + 降维，（降维能减少空间复杂度，但不利于程序的扩展）
const f_down = (n) => {
  let pre1 = 1, pre2 = 1;
  for(let i = 2; i < n; i++) {
    result = pre1 + pre2;
    pre1 = pre2
    pre2 = result
  }
  return pre2
}

// console.log(f_arr(7))
// console.log(f_down(7))

/**
 * 不同路径
 * 
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 */
const diffPath = (m, n) => {
  const col = new Array(n).fill(1);
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      col[j] = col[j] + col[j - 1];
    }
  }
  return col[n - 1]
}
console.log(diffPath(3, 7))