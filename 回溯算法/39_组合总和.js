function combinationSum(candidates, target) {
  let res = [];
  candidates.sort((a, b) => a-b);
  function backTrack(j, path) {
    let sum = path.reduce((a,b) => a+=b, 0)
    if(target === sum) {
      res.push([...path]);
      return;
    }
    for(let i = j; i < candidates.length; i++) {
      const num = candidates[i]
      if(num > target - sum) break;
      path.push(num);
      backTrack(i, path);
      path.pop();
    }
  }
  backTrack(0, []);
  return res
};

console.log(combinationSum([2,3,6,7], 7))
