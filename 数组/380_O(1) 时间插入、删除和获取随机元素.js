function RandomizedSet() {
  this.valIndexMap = new Map();
  this.nums = [];
};

RandomizedSet.prototype.insert = function(val) {
  if(this.valIndexMap.has(val)) return false;
  this.valIndexMap.set(val, this.nums.length);
  this.nums.push(val)
  return true
};

RandomizedSet.prototype.remove = function(val) {
  if(!this.valIndexMap.has(val)) return false;
  let valIndex = this.valIndexMap.get(val);
  this.nums[valIndex] = this.nums[this.nums.length - 1];
  this.valIndexMap.set(this.nums[valIndex], valIndex)
  this.nums.pop();
  this.valIndexMap.delete(val)
  return true
};

RandomizedSet.prototype.getRandom = function() {
  return this.nums[0 + parseInt(Math.random() * this.nums.length)]
};
