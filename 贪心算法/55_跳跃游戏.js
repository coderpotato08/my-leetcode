/**
 * 当前位置后面的覆盖范围cover是否可以到达终点
 * 每到一个节点更新最长覆盖范围；
 * 当覆盖范围大于等于nums长度，说明可以到达终点。
 */
const canJump = function(nums) {
  if(nums.length == 1) return true;
  let cover = 0;
  for(let i=0; i<= cover; i++) {
      cover = Math.max(i + nums[i], cover);
      if(cover >= nums.length-1) return true
  }
  return false
};

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))