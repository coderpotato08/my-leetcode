function maxSubArray (nums) {
  let count = 0;
  let result = -Infinity;
  for(let i = 0; i < nums.length; i++) {
    count += nums[i];
    if (count > result) {
      result = count;
    }
    if (count < 0) {
      count = 0
    }
  }
  console.log(result);
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
