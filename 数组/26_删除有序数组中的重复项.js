function removeDuplicates(nums) {
  let len = nums.length;
  let i = 0, j = 1;
  for(;j < nums.length; j++) {
    if(nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i ++
    }
  }
  return i + 1
}

console.log(removeDuplicates([0,0,1,2,2,2,3,3,4,5,5]))
