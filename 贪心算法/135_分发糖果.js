/**
 * 分两种情况进行计算：
 * 右边孩子比左边孩子大的情况 正向遍历
 * 左边孩子比右边孩子大的情况，逆向遍历
 */
const candy = function(ratings) {
  let len = ratings.length, arr = new Array(len).fill(1);
  for(let i=1; i<len; i++) { // 右边孩子比左边孩子大的情况
      if(ratings[i] > ratings[i-1]) {
          arr[i] = arr[i-1] + 1
      }
  }
  console.log(arr)
  for(let i=len-2; i>=0; i--) {  // 左边孩子比右边孩子大的情况
      if(ratings[i] > ratings[i+1]) {
          arr[i] = Math.max(arr[i], arr[i+1]+1)
      }
  }
  return arr.reduce((a,b)=> a+=b)
};

console.log(candy([1,3,4,5,2]))