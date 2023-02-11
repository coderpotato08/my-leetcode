function removeElement(nums, val) {
  // 双指针 快指针指向需要添加的元素 慢指针指向更新数组下标的元素
  // let slowIndex = 0;
  // for(let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
  //   if(val !== nums[fastIndex]) {
  //     nums[slowIndex++] = nums[fastIndex];
  //   }
  // }
  // return slowIndex;
  
  let len = nums.length;
  for(let i = 0; i < len; i++) {
      if(nums[i] === val) {
          for(let j = i; j < len - 1; j++) {
              nums[j] = nums[j + 1];
          }
          i --;
          len --;
      }
  }
  return len
}
console.log(removeElement([1,2,7,4,5,7,9,6,3,4,5,3], 3))