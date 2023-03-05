var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
  if(runningCost >= boardingCost * 4) return -1;
  let i = 0, more = 0;
  while(customers[i] === 0) {
      customers.shift();
      more ++;
  }
  let wait = customers[0],    // 等待人数
      loop = 0,   // 旋转次数
      profit = -Infinity; // 最大利润
      run = 0;
      result = 0;
  while(wait > 0 || (loop < customers.length && wait === 0)) {
      run = wait >= 4 ? run + 4 : run + wait;
      let p = boardingCost * run - (loop + 1) * runningCost;
      loop ++
      if(p > profit) {
          profit = p;
          result = loop + more;
      }
      wait = wait >= 4 ? wait - 4 : 0;
      wait = wait + (customers[loop] || 0)
  }
  return profit > 0 ? result : -1
};
console.log(minOperationsMaxProfit([10,10,6,4,7],3,8))