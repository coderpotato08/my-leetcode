let res = []
function permute(nums) {
  let visited = new Array(nums.length).fill(false)
  backTrack(nums, [], visited);
  return res
};

function backTrack(nums, paths, visited) {
  if(paths.length === nums.length) {
    res.push([...paths]);
    return;
  }
  for(let i = 0; i < nums.length; i++) {
    if(visited[i]) continue;
    paths.push(nums[i]);
    visited[i] = true;
    backTrack(nums, paths, visited);
    paths.pop();
    visited[i] = false;
  }
}

console.log(permute([0,1]))
