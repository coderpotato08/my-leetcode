const isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  const arrSet = new Array(26).fill(0), base = 'a'.charCodeAt();
  for(let c of s) {
      arrSet[c.charCodeAt()-base]++
  }
  for(let c of t) {
      if(!arrSet[c.charCodeAt()-base]) return false;
      arrSet[c.charCodeAt()-base]--
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram('cat', 'rat'))