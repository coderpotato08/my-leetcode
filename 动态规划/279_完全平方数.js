var numSquares = function(n) {
  const dp = new Array(n+1).fill(Infinity);
  dp[0]=0;
  for(let i=1; i*i <= n; i++) { // 物品
    for(let j=i*i; j <=n; j++) { // 容量
      dp[j] = Math.min(dp[j], dp[j-i*i]+1)
    }
  }
  return dp[n]
}

console.log(numSquares(12))