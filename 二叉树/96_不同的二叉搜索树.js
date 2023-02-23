let memo;
function numTrees(n) {
  memo = new Array(n+1).fill(new Array(n+1).fill(0));
  return count(1, n);
}
function count(lo, hi) {
  if(lo > hi) return 1;
  if(memo[lo][hi]) return memo[lo][hi];
  let res = 0
  for(let i = lo; i <= hi; i++) {
    let lc = count(lo, i-1);
    let rc = count(i+1, hi);
    res += lc * rc;
  }
  memo[lo][hi] = res;
  return res;
}

console.log(numTrees(3))
