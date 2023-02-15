// 前缀和 + 二分查找
var Solution = function(w) {
  this.preSum = new Array(w.length + 1);
  this.searchLeft = function(nums, target) {

    return l;
  }
  this.preSum[0] = 0;
  for(let i = 1; i < this.preSum.length; i++) {
    this.preSum[i] = this.preSum[i-1] + w[i-1];
  }
};

Solution.prototype.pickIndex = function() {
  let target = parseInt(Math.random() * this.preSum[this.preSum.length - 1]) + 1;
  let l = 0, nums = this.preSum, r = nums.length;
  while(l < r) {
    let mid = (l + r) >> 1
    if(target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l - 1
};

let obj = new Solution([1,2,3,5,2])
console.log(obj.pickIndex())
console.log(obj.pickIndex())

