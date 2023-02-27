function combine(n, k) {
  let res = [], path = [], nums = [];
  for(let i=1; i <= n; i++) {
    nums.push(i)
  }
  function backTrack(start) {
    if(path.length === k) {
      res.push([...path])
    }
    for(let i=start; i < nums.length; i++) {
      path.push(nums[i]);
      backTrack(i+1);
      path.pop();
    }
  }
  backTrack(0, []);
  return res
};
