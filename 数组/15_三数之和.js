function threeSum(nums) {
  let arr = nums.sort((a, b) => a - b);
  let k, result = [];
  for(k = 0; k < arr.length - 2; k++) {
    if (arr[k] > 0) break;
    if (k > 0 && arr[k] == arr[k - 1]) continue;
    let i = k + 1, j = arr.length - 1;
    while(i < j) {
      let sum = arr[k] + arr[i] + arr[j];
      if (sum < 0) {
        i ++;
      } else if (sum > 0) {
        j --;
      } else {
        result.push([arr[k], arr[i], arr[j]])
        i ++;
        j --;
      }
      while(i < j) {
        if (arr[i] == arr[i - 1]) i ++;
      }
      while(i < j) {
        if (arr[j] == arr[j + 1]) j --;
      }
    }
  }
  return result
}

console.log(threeSum([-1,0,1,2,-1,-4]));
