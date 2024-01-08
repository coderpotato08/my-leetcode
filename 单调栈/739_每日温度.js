// 
const dailyTemperatures = function(temperatures) {
  const result = new Array(temperatures.length).fill(0)
  const stack = [];
  stack.push(0);
  for(let i=1; i<temperatures.length; i++) {
      while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
          const top = stack.pop();
          result[top] = i-top;
      }
      stack.push(i);
  }
  return result;
};