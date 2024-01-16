// 思路：实际上也是切割问题，但是需要判断 边界条件 和 递归条件
// 边界：一旦path长度为4，且遍历到的索引start == s长度 说明找到合适的切割
// 递归条件：有两种情况直接break；一种当前切割的数值 >255 还有一种2或3位数且开头为0
const restoreIpAddresses = function(s) {
  let res = [];
  const backTrack = function(start, path) {
      if(path.length > 4) return;
      if(path.length == 4 && start == s.length) {
          res.push(path.join("."));
          return;
      }
      for(let i=start; i<s.length; i++) {
          let str = s.slice(start, i+1);
          if(str.length > 3 || +str > 255) break;
          if(str.length > 1 && str[0] == "0") break;
          path.push(str);
          backTrack(i+1, path);
          path.pop();
      }
  }
  backTrack(0, []);
  return res;
};