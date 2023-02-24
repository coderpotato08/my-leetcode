// 每次都减最小数
function minimumOperations(nums) {
  let set = new Set();
  for(let num of nums) {
    if(num > 0) {
      set.add(num)
    }
  }
  return set.size
};


