function minSubArrayLen(target, nums) {
  let i = 0, j = 0;
  let minLen = Infinity;
  while(j < nums.length) {
    const result = nums.splice(i,j+1).reduce((a, b) => a = a + b, 0);
    if(result < target) {
      j ++
    } else (result > target) {
      i ++
    }
  }
}