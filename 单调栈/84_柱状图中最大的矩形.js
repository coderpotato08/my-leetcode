const largestRectangleArea = function(heights) {
  const arr = [0,...heights,0];
  const st = [0];
  let max = 0
  for(let i=1; i<arr.length; i++) {
      if(arr[i] < arr[st[st.length-1]]) {
          while(st.length && arr[i] < arr[st[st.length-1]]) {
              if(st.length) {
                  const mid = st.pop(), last=st[st.length-1];
                  sum = (i-last-1) * arr[mid]
                  max = Math.max(max, sum)
              }
          }
          st.push(i)
      } else if(arr[i] == arr[st[st.length-1]]) {
          st.pop();
          st.push(i)
      } else {
          st.push(i)
      }
  }
  return max
};