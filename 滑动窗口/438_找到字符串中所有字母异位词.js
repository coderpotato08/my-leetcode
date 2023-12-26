/**
 * 定义need条件，和滑动窗口win
 * 最终need为一个map 对应每个字母和其需要出现的次数，win和need一一对应就算一个结果
 * 用valid来判断是否为异位词，每次满足一个字母条件 +1，当valid的个数与map中字母个数相同，则视为合法解
 * 窗口缩小条件：窗口大小大于 p 的长度
 */
function findAnagrams(s, p) {
  let l = 0, r = 0, res = [];
  let need = {}, win = {};
  let valid = 0;
  for(let i of p) {
    need[i] = (need[i] || 0) + 1
  }
  while(r < s.length) {
    let c = s[r];
    r ++
    if(need[c]) {
      win[c] = (win[c] || 0) + 1;
      if(win[c] == need[c]) {
        valid ++
      }
    }
    while(r-l >= p.length) {
      if (valid == Object.keys(need).length) res.push(l);
      let d = s[l];
      l ++
      if (need[d]) {
        if(need[d] == win[d]) {
          valid --;
        }
        win[d] --;
      }
    }
  }
  return res
};
