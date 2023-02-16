function numberOfPairs(nums) {
  let map = new Map();
  let res = 0
  for(let i of nums) {
    map.set(i, map.has(i) ? !map.get(i) : true)
    if(!map.get(i)) res ++
  }
  return [res, nums.length - 2 * res]
};

console.log(numberOfPairs([1,1,2,2,2,3,3,3,3,3,4,4,5,5,5])) // [6, 3]
