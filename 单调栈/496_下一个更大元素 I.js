const nextGreaterElement = function(nums1, nums2) {
  const res = new Array(nums1.length).fill(-1);
  const map = new Map(), stack=[nums2[0]];
  for(let i=0; i<nums1.length; i++) {
      map.set(nums1[i], i);
  }
  for(let i=1; i<nums2.length; i++) {
      while(stack.length && nums2[i] > stack[stack.length-1]) {
          const top = stack.pop();
          if(map.has(top)) {
              res[map.get(top)] = nums2[i]
          }
      }
      stack.push(nums2[i])
  }
  return res
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))
console.log(nextGreaterElement([2,4], [1,2,3,4]))