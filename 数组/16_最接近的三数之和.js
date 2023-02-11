function threeSumClosest(nums, target) {
  let k = 0;
  let result = Number.MAX_SAFE_INTEGER;
  let arr = nums.sort((a, b) => a - b);
  for(;k < arr.length; k++) {
    if (k > 0 && arr[k] === arr[k-1]) continue;
    let i = k+1, j = arr.length - 1;
    while(i < j) {
      let sum = arr[k] + arr[i] + arr[j];
      if (Math.abs(sum - target) < Math.abs(result - target))
        result = sum;
      if (sum < target) {
        i ++;
      } else if (sum > target){
        j --;
      } else {
        return sum;
      }
    }
  }
  return result;
};

console.log(threeSumClosest([0,0,0], 1))
