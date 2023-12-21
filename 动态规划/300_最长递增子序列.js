// 暴力穷举
const lengthOfLIS = function(nums) {
  let max = 0
  const l = (arr, n) => {
    if (n === arr.length - 1) {
      return 1;
    }
    let maxLen = 1;
    for (let i = n + 1; i < arr.length ; i++) {
      if (arr[i] > arr[n]) {
        maxLen = Math.max(maxLen, l(arr, i) + 1)
      }
    }
    return maxLen
  }
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, l(nums, i) )
  }
  console.log(max)
};

const arr1 = []
lengthOfLIS(arr1)