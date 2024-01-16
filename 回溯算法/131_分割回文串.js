// 思路，和组合类似，每一次遍历实际上不是取数，而是做分割
const partition = function(s) {
  let res = []; 
  const backTrack = function(s, startIndex, path) {
      if(startIndex >= s.length) {
          res.push([...path])
          return;
      }
      for(let i=startIndex; i<s.length; i++) {
        if(!isPalindrome(s, startIndex, i)) continue;
        path.push(s.slice(startIndex, i + 1));
        backTrack(s, i + 1, path);
        path.pop();
      }
  }
  const isPalindrome = function(s, startIndex, i) {
      let l=startIndex; r=i;
      while(l<r) {
          if(s[l] !== s[r]) return false
          l++;
          r--
      }
      return true
  }
  backTrack(s, 0, []);
  return res
};

console.log(partition("aab"))