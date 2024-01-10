/**
 * 思路：单调栈，找到当前元素右边第一个比他大的元素，然后就可以求接水面积
 * 找到右边第一个比他大的元素之后，还需要找到左边第一个比他大的元素，才能得到两个边界
 * 在单调栈中，右边第一大实际上就是当前遍历元素，而左边第一大其实就是栈顶元素的下一个元素，因为栈是递增的。
 * 得到边界后就是求和 当前下标mid 右边第一大 i 左边第一大 stack[stack.length-1]
 * 伪代码：h = max(height[i], height[stack[stack.length-1]]) - height[mid]；
 *        w = i - stack[stack.length-1] - 1
 *        sum += h * w
 */
const trap = function(height) {
  if(height.length <= 2) return 0
  let sum = 0, stack=[0];
  for(let i=1; i<height.length; i++) {
      if(height[i] < height[stack[stack.length-1]]) {
          stack.push(i)
      } else if (height[i] == height[stack[stack.length-1]]) {
          stack.pop();
          stack.push(i)
      } else {
          while(stack.length && height[i] > height[stack[stack.length-1]]) {
              const mid = stack.pop(), last = stack[stack.length-1];
              if(stack.length) {
                  sum += (Math.min(height[i], height[last])-height[mid]) * (i-last-1)
              }
          }
          stack.push(i)
      }
  }
  return sum
};