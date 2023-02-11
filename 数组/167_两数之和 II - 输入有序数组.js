function twoSum(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while(l < r) {
    let sum = numbers[l] + numbers[r];
    if(sum > target) {
      r --;
    } else if (sum < target) {
      l ++;
    } else {
      return[l+1, r+1]
    }
  }
};

console.log(twoSum([2,3,5,7,9,12,14,16,18], 14))
