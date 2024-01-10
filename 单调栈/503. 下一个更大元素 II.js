const nextGreaterElements = function(nums) {
  const len = nums.length
  const res = new Array(len).fill(-1);
  const stack = [0]
  for(let i=0; i<len*2; i++) {
      while(stack.length && nums[i%len] > nums[stack[stack.length-1]]) {
          const top = stack.pop();
          res[top] = nums[i%len]
      }
      stack.push(i%len)
  }
  return res.splice(0, nums.length)
};

console.log([1,2,1])
console.log([1,2,3,4,3])