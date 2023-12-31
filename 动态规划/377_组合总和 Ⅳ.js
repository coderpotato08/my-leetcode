const combinationSum4 = function(nums, target) {
  const res = [];
  const backTrack = (path) => {
      const sum = path.reduce((a,b) => a+=b, 0);
      if (sum == target) {
          res.push([...path]);
          return;
      };
      if (sum > target) return;
      for (num of nums) {
          path.push(num);
          backTrack(path);
          path.pop();
      }
  }
  backTrack([]);
  return res.length
};

console.log(combinationSum4([4,2,1],32))