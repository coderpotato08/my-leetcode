// 非重复数组，二分查找某个值
function search(nums, target) {
  let l = 0, r = nums.length - 1;
  while(l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    if (target > nums[mid]) {
      l = mid + 1
    } else if (target < nums[mid]) {
      r = mid - 1
    } else if (target == nums[mid]){
      return mid
    }
  }
  return -1;
}

// 存在重复值的排序数组，寻找左边界的二分查找
function searchLeft(nums, target) {
  let l = 0, r = nums.length; // [l, r)
  while(l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    if(nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid
    } else if (target == nums[mid]) {
      // 找到值，收紧右边确认左边界
      r = mid
    }
  }
  return l  // 因为结束循环条件是l == r
}
console.log(searchLeft([1,2,3,4,5,7,8], 6))

// 存在重复值的排序数组，寻找右边界的二分查找
function searchRight(nums, target) {
  let l = 0, r = nums.length; // [l, r)
  while(l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    if(nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid
    } else if (target == nums[mid]) {
      // 找到值，收紧左边确认右边界
      l = mid + 1;
    }
  }
  //  if (left - 1 < 0) return -1; // 防止target过小，r一直向左靠
  //  return nums[left - 1] == target ? (left - 1) : -1; // 未找到的情况
  return l - 1  // 因为结束循环条件是l == r, 且当最后找到右边界时 l = mid + 1 所以mid = l - 1；
}
