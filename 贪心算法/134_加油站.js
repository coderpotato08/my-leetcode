// 暴力解法
const canCompleteCircuit_1 = function(gas, cost) {
  for(let i=0; i<gas.length; i++) { // 以i为起点
      let rest = gas[i] - cost[i];
      let index = (i+1) % gas.length;
      while(rest > 0 && index !== i) { // 油箱剩余大于0 且 未到达i起点
          rest += gas[index] - cost[index];
          index = (index+1) % gas.length;
      }
      if(rest >= 0 && index == i) {
          return i
      }
  }
  return -1
};

//* 思路：累加每个站点油箱的“获利”，一旦小于0则说明无法走下去，那就取下一个节点为起始位置继续遍历
const canCompleteCircuit = function(gas, cost) {
  let curSum = 0, totalSum = 0, start = 0;
  for(let i=0; i<gas.length; i++) {
      curSum += gas[i] - cost[i];     // 当前累加油量；
      totalSum += gas[i] - cost[i]; 
      if(curSum < 0) {
          curSum = 0
          start = i+1
      }
  }
  if(totalSum < 0) return -1;
  return start
};