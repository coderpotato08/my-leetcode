function lengthOfLongestSubstring(s) {
  let l = 0, r = 0, max = 0;
  let map = new Map()
  while(r < s.length) {
    let c = s[r];
    map.set(c, (map.has(c) ? map.get(c) + 1 : 1))
    r++
    while(map.get(c) > 1) {
      let c = s[l];
      map.set(c, map.get(c) - 1)
      l++;
    }
    max = r-l > max ? r-l : max;
  }
  return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))
