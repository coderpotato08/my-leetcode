/*给你一个正整数数组 nums，你需要从中任选一些子集，然后将子集中每一个数乘以一个 任意整数，并求出他们的和。

假如该和结果为1，那么原数组就是一个「好数组」，则返回 True；否则请返回 False。
*/

/*
* 输入：nums = [12,5,7,23]
* 输出：true
* 解释：挑选数字 5 和 7。
* 5*3 + 7*(-2) = 1
* */

// 原理是根据裴蜀定理 任意不为0的整数a和b，他们的最大公约数gcb(a,b) = d，对于任意整数x，y都满足 ax + by = d的倍数
function isGoodArray(nums) {
  let divisor = nums[0];
  for (const num of nums) {
    divisor = gcd(divisor, num);
    if(divisor === 1) {
      break;
    }
  }
  return divisor === 1
};

function gcd(num1, num2) {
  while (num2 != 0) {
    let temp = num1;
    num1 = num2;
    num2 = temp % num2;
  }
  return num1;
}
