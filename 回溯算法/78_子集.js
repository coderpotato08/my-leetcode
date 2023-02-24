function subsets(nums) {
  let res = [];
  function backTrack(nums, path, start) {
    res.push([...path]);
    for(let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backTrack(nums, path, i + 1);
      path.pop()
    }
  }
  backTrack(nums, [], 0)
  return res
};

console.log(subsets([1,2,3]))
