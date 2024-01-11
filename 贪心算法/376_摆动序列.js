/**
 * 思路：每次遇到上坡/下坡时，用一个标识符isUp记录下次摆动是需要上摆还是下摆
 * 初始化：isUp初始为-1，因为需要根据第一次摆动来决定接下来的摆动方向，
 * 下次摆动方向isUp 与 s = nums[i] - nums[i-1] 的正负相反
 */
const wiggleMaxLength = function(nums) {
  let isUp = -1, r=1;
  for(let i=1; i<nums.length; i++) {
      let s = nums[i] - nums[i-1];
      if(isUp == -1 && s !== 0) {
          isUp = s < 0 ;
          r++
      } else {
          if((!isUp && s < 0) || (isUp && s > 0)) {
              r++
              isUp = !isUp
          }
      }
  }
  return r;
};

console.log(wiggleMaxLength([1,7,4,9,2,5]))
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]))
console.log(wiggleMaxLength([1,2,3,4,5,6,7,8,9]))