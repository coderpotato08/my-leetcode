function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let k, result = [];
  for(k = 0; k < nums.length - 3; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] == nums[k - 1]) continue;
    let i = k + 1, j = nums.length - 1;
    while(i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        i ++;
      } else if (sum > 0) {
        j --;
      } else {
        result.push([nums[k], nums[i], nums[j]]);
        while(i < j && nums[i] == nums[i + 1]) {
          i ++;
        }
        while(i < j && nums[j] == nums[j - 1]) {
          j --;
        }
        i ++;
        j --;
      }
    }
  }
  return result
}

console.log(threeSum([-1,0,1,2,-1,-4]));
