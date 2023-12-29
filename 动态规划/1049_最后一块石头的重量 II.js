/**
 * 石头相撞抵消，所以尽可能凑出两组总和相差最小的子集，其实与分割等和子集十分类似
 * 将 2/总和 视为target，使分割出来的石头堆总和最接近这个值
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeightII = function(stones) {
  let sum = stones.reduce((a,b)=>a+=b, 0)
  let dpLen = Math.floor(sum / 2)
  const dp = new Array(dpLen+1).fill(0);
  for(let i=0; i<stones.length; i++) {
      for(let j=dpLen; j>=stones[i]; j--) {
          dp[j] = Math.max(dp[j], dp[j-stones[i]]+stones[i])
      }
  }
  console.log(dpLen, dp[dpLen])
  return sum - 2 * dp[dpLen]
};

// lastStoneWeightII([2,7,4,1,8,1])
lastStoneWeightII([31,26,33,21,40])