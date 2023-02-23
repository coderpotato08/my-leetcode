function countRangeSum(nums, lower, upper) {
  let s = 0
  const sum = [0]
  for(const num of nums) {
    s += num;
    sum.push(s);
  }
  return countRangeSumProcess(sum, lower, upper, 0, sum.length-1)
};
function countRangeSumProcess(nums, lower, upper, left, right) {
  if(left === right) {
    return 0;
  } else {
    const mid = left +((right - left) >> 1);
    const n1 = countRangeSumProcess(nums, lower, upper, left, mid);
    const n2 = countRangeSumProcess(nums, lower, upper, mid+1, right);
    let ret = n1 + n2;

    let i = left;
    let l = mid + 1, r = mid + 1;
    while(i <= mid) {
      while(l <= right && nums[l] - nums[i] < lower) l++;
      while(r <= right && nums[r] - nums[i] <= upper) r++;
      ret += (r-l);
      i ++;
    }

    let temp = [];
    let p1 = left, p2 = mid + 1;
    let p = 0;
    while(p1 <= mid || p2 <= right) {
      if (p1 === mid + 1) {
        temp[p++] = nums[p2++];
      } else if (p2 === right + 1) {
        temp[p++] = nums[p1++];
      } else if (nums[p1] < nums[p2]) {
        temp[p++] = nums[p1++];
      } else {
        temp[p++] = nums[p2++];
      }
    }
    for(let k = 0; k < temp.length; k++) {
      nums[left + k] = temp[k];
    }
    return ret;
  }
}
