function checkInclusion(s1, s2) {
  let l = 0, r = 0;
  let need = new Map(), win = new Map();
  for (let i of s1) {
    need.set(i, need.has(i) ? need.get(i) + 1 : 1);
  }
  let count = 0;
  while(r < s2.length) {
    let c = s2[r];
    if(need.has(c)) {
      win.set(c, win.has(c) ? win.get(c) + 1 : 1)
      if(need.get(c) == win.get(c)) {
        count ++;
      }
    }
    r ++;
    while(count === need.size) {
      let d = s2[l];
      if(r - l === s1.length) return true;
      if(need.has(d)) {
        win.set(d, win.get(d) - 1)
        if(win.get(d) < need.get(d)) {
          count --
        }
      }
      l ++;
    }
  }
  return false
};

console.log(checkInclusion("ab", "eidboaoo"))
