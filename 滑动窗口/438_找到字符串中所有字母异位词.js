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
