function balancedString(s) {
  let initial = {"Q": 0, "W": 0, "E": 0, "R": 0}
  let aver = s.length/4;
  let count = 0;
  for(item of s) {
    initial[item] ++
  }
  // 找出多余字符
  for(const item in initial) {
    if(initial[item] > aver) {
      initial[item] -= aver;
      count += initial[item];
    } else {
      initial[item] = 0;
    }
  }
  // 所有字符平衡值小于 n/4 则字符串达到平衡
  if(count === 0) return 0;
  // 双指针确定滑动窗口
  // 求出当滑动窗口以外的字符串中字符平衡值<= n/4 的最小滑动窗口区间
  let l = 0, r = 0;
  let res = Infinity;
  while(r < s.length) {
    if(initial[s[r]] > 0) {
      count --;
    }
    initial[s[r]] --;
    // count记录滑动窗口多余字符的数量
    // count==0 说明找到所有多余字符，达到条件
    if(count === 0) {
      // 此时平衡值正常的值 initail[i] 应小于0
      // 先剔除平衡值正常的字符
      while(initial[s[l]] < 0) {
        initial[s[l]]++;
        l++;
      }
      res = Math.min(res, r-l+1)
      initial[s[l]]++;
      l++;
      count++
    }
    r ++;
  }
  return res
};

console.log(balancedString("WWEQERQWQWWRWWERQWEQ"))
