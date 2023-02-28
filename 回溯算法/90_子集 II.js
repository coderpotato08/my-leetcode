function subsetsWithDup(nums) {
  let res = [];
  let path = [];
  nums.sort((a,b) => a-b)
  function backTrack(nums, start) {
    res.push([...path]);
    for(let i = start; i < nums.length; i++) {
      if(i > start && nums[i] === nums[i-1]) continue;
      path.push(nums[i]);
      backTrack(nums, i+1);
      path.pop();
    }
  }
  backTrack(nums, 0);
  return res;
};
