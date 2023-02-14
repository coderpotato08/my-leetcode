function minWindow(s, t) {
  let l = 0, r = 0, res = "";
  let need = new Map()
  for(let i = 0; i < t.length; i++) {
    need.set(t[i], (need.has(t[i]) ? need.get(t[i])+1 : 1));
  }
  let needCount = need.size
  while(r < s.length) {
    let cIn = s[r];
    if(need.has(cIn)) {
      need.set(cIn, need.get(cIn)-1);
      if(need.get(cIn) === 0) needCount -= 1
    }
    while(needCount == 0) {
      const newRes = s.substring(l, r+1);
      if(!res || newRes.length < res.length) res = newRes;
      let cOut = s[l];
      if(need.has(cOut)) {
        need.set(cOut, need.get(cOut) + 1);
        if(need.get(cOut) === 1) needCount += 1;
      }
      l += 1;
    }
    r += 1;
  }
  return res
};

console.log(minWindow("ADOBECODEBANC", "ABC"))
