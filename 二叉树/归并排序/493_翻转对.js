// 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。

// 你需要返回给定数组中的重要翻转对的数量。
// 输入: [1,3,2,3,1]
// 输出: 2 (3,1)和(3,1)

function reversePairs(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return reversePairsProcess(nums, 0, nums.length - 1)
};
function reversePairsProcess(nums, left, right) {
  if(left === right) {
    return 0;
  } else {
    const mid = left + ((right - left) >> 1);
    const n1 = reversePairsProcess(nums, left, mid);
    const n2 = reversePairsProcess(nums, mid+1, right);
    let ret = n1 + n2;

    let i = left, j = mid+1;
    while(i <= mid) {
      while(j <= right && nums[i] > 2 * nums[j]) {
        j ++
      }
      ret += j - mid - 1;
      i++
    }

    const temp = [];
    let p1 = left, p2 = mid + 1;
    let p = 0;
    while(p1 <= mid || p2 <= right) {
      if(p1 === mid + 1) {
        temp[p++] = nums[p2++]
      } else if (p2 === right + 1) {
        temp[p++] = nums[p1++]
      } else if(nums[p1] < nums[p2]) {
        temp[p++] = nums[p1++]
      } else {
        temp[p++] = nums[p2++]
      }
    }
    for (let k = 0; k < temp.length; k++) {
      nums[left + k] = temp[k]
    }
    return ret
  }
}
