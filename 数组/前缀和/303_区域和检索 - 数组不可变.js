function NumArray(nums) {
  this.preSums = [0]
  // 计算每位前缀和，最后多出一位为总和，所以i需要小于等于nums.lenght
  for(let i = 1; i <= nums.length; i++) {
    this.preSums[i] = this.preSums[i - 1] + nums[i - 1];
  }
}

NumArray.prototype.sumRange = function(left, right) {
  // right位总和（right+1 位置的前缀和）减去 left位置前缀和
  return this.preSums[right + 1] - this.preSums[left];
};
