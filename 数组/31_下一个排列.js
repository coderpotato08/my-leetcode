function nextPermutation(nums) {
  let i = nums.length - 2, j = nums.length - 1;
  //从右往左遍历
  while(i >= 0 && nums[i] >= nums[i+1]) {
    i --
  }
  if (i >= 0) { // 这个数组中存在降序点，获取到降序的数
    while(j > i && nums[j] <= nums[i]) {  // 找到降序数后面第一个大于它的数
      j --
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  let l = i + 1, r = nums.length - 1;
  // 如果没找到降序点，说明整个数组已经是最大排序，将整个数组反转（此时i+1就是指向数组头）
  // 如果找到了，则说明第一个降序点之后的都是升序，讲起后面反转（因为要获得下一排序，所以两数置换后，后面的数要重新从小到大排序）
  while(l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]]
    l++; r--
  };
  return nums
}

console.log(nextPermutation([1,3,2]))
