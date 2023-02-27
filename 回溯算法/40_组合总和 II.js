function combinationSum2(candidates, target) {
  let res = []
  candidates.sort((a,b) => a -= b);
  function backTrack(j, path) {
    sum = path.reduce((a, b) => a+= b, 0);
    if(sum > target) return;
    if(sum === target) {
      res.push([...path]);
      return;
    }
    for(let i = j; i < candidates.length; i++) {
      if(i > j && candidates[i-1] === candidates[i]) continue;
      path.push(candidates[i]);
      backTrack(i+1, path);
      path.pop();
    }
  }
  backTrack(0, []);
  return res
};
