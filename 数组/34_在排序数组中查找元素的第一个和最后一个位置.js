function searchRange(nums, target) {
  let result = [-1, -1];
  let l = 0, r = nums.length - 1;
  while(l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    if(target < nums[mid]) {
      r = mid - 1;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      result = [mid, mid]
      let i = mid + 1;
      while(mid >= 0 && target === nums[mid]) {
        result[0] = mid --
      }
      while(i < nums.length && target === nums[i]) {
        result[1] = i ++
      }
      break;
    }
  }
  return result;
}

console.log(searchRange([5,7,7,7,7,8,8,10], 7))
