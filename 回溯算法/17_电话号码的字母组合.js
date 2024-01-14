/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

const letterCombinations = function(digits) {
  const mapArr = ["", "",   // 键码映射
  ["a","b","c"],
  ["d","e","f"],
  ["g","h","i"],
  ["j","k","l"],
  ["m","n","o"],
  ["p","q","r","s"],
  ["t","u","v"],
  ["w","x","y","z"]]
  const res = [];
  if (digits === '') return [];
  const backTrack = function(len, curIndex, path) {
      if(path.length == len) {
          res.push([...path].join(''));
          return;
      }
      const arr = mapArr[digits[curIndex]]; // 拿到映射
      for(let i=0; i<arr.length; i++) {
          path.push(arr[i]);
          backTrack(len, curIndex+1, path);
          path.pop();
      }
  }
  backTrack(digits.length, 0, []);
  return res
};