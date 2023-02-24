function combinationSum3(k, n) {
  let res = [];
  function backTrack(cur, n, k, sum, path, res) {
    if(path.length + (n-cur+1) < k || path.length > k) return;
    if(path.length === k && path.reduce((a, b) => a+=b, 0) == sum) {
      res.push([...path]);
      return;
    }
    path.push(cur);
    backTrack(cur+1, n, k, sum, path, res);
    path.pop();
    backTrack(cur+1, n, k, sum, path, res);
  }
  backTrack(1, 9, k, n, [], res);
  return res;
};

console.log(combinationSum3(3, 9))
