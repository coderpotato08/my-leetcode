/**
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 * 示例 1：
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
 */

/**
 * dp含义：dp[i] true/false i是字符串长度 
 * 递推公式：if(s.substring(i-wordDict[j].length, i) === wordDict[j] && dp[i-wordDict[j].length] == true) dp[i] = true
 * 初始化dp[0] = true, 非0为false
 * 遍历顺序，由于apple，pen，apple 和 apple，apple，pen组合成的值不相同，因此元素之间的获取得是要看顺序的，因此确定求的是排列数，先背包后物品；
 */
const wordBreak = function(s, wordDict) {
  const dp = new Array(s.length+1).fill(false);
  dp[0] = true;
  for(let i=0; i<=s.length; i++) {
      for(let j=0; j<wordDict.length; j++) {
          if (i >= wordDict[j].length) {
              if(s.substring(i-wordDict[j].length, i) === wordDict[j] && 
                  dp[i-wordDict[j].length]) dp[i] = true;
          }
      }
  }
  return dp[s.length]
};

console.log(wordBreak("leetcode", ["leet", "code"]))
console.log(wordBreak("applepenapple", ["apple", "pen"]))
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))