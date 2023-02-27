function permuteUnique(nums) {
  let res = [];
  nums.sort((a,b) => a-=b)
  function backTrack(nums, path, visited) {
    if(path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for(let i = 0; i < nums.length; i++) {
      // 固定相同的元素在排列中的相对位置
      if(i > 0 && nums[i - 1] == nums[i] && !visited[i-1]) {
        continue;
      }
      if (!visited[i]) {
        path.push(nums[i]);
        visited[i] = true;
        backTrack(nums, path, visited);
        path.pop();
        visited[i] = false;
      }
    }
  }
  backTrack(nums, [], []);
  return res
};

console.log(permuteUnique([1,2,2]))
