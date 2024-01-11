const jump_1 = function(nums) {
  if(nums.length == 1) return 0
  let cur = 0, next = 0, count = 0;
  for(let i=0; i<nums.length; i++) {
      next = Math.max(i+nums[i], next);
      if(i == cur) { // 走到当前最远覆盖距离位置
          if(cur < nums.length-1) {   // 当前最远覆盖距离位置没到终点，还需走
              count++;
              cur = next; // 更新最远覆盖距离为 下一步最远覆盖距离
              if(cur >= nums.length-1) break;
          } else break;
      }
  }
  return count
};

// 简化版
const jump_2 = function(nums) {
  let cur = 0,    //当前覆盖距离最远
      next = 0,   // 跳了几次
      count = 0;  //下一步覆盖距离最远
  for(let i=0; i<nums.length-1; i++) { // 因为一定可以到达，所以在倒数第一个位置时是一定能到达终点的，跳过最后一个
      next = Math.max(i+nums[i], next);
      if(i == cur) { // 更新下一步覆盖的最远距离下标
          cur = next;
          count++ // 跳
      }
  }
  return count
};