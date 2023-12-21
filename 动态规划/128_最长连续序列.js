// 暴力穷举
const longestConsecutive_1 = function(nums) {
  let res = 0
  const loop = (arr, path) => {
    if(arr.length <= 0) {
        res = Math.max(res, path.length)
        return;
    }
    const cur = path[path.length - 1];
    let i = arr.findIndex((n) => n - 1 === cur);
    if (i > -1) {
      path.push(arr[i])
      loop(arr.filter((num) => num !== arr[i]), path)
    } else {
      res = Math.max(res, path.length)
      return;
    }
  }
  for(let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    loop(nums.filter((num) => num !== cur), [cur]);
  }
  return res
};

console.log(longestConsecutive_1([100,4,200,1,3,2]))

// 哈希表
/**
 * 暴力穷举会有额外不必要的计算 
 * 就比如当遍历x, x+1, x+2..., x+y时，暴力穷举也会对x+1为头的情况进行遍历
 * 实际上x+1, x+2..., x+y的遍历是多余的，因为其存在上一个连续数x，因此它的结果绝不可能是最长的
 * 
 * -- 思路 --
 * 首先用Set将数组转换成去重hash数组
 * 定义hash表来找当前数x在hash中是否存在x-1
 * 不存在则遍历寻找下个连续数，找完后更新len
 */
const longestConsecutive_hash = function(nums) {
  let set = new Set(nums), res = 0;
  for(num of nums) {
      if (!set.has(num - 1)) {
          let cur = num;
          let curLen = 1;
          while(set.has(cur + 1)) {
              cur += 1;
              curLen += 1;
          }
          res = Math.max(res, curLen);
      }
  }
  return res
};