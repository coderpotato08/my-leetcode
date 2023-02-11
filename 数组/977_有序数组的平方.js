function squareArr(arr) {
  let result = [], k = arr.length - 1;
  let i = 0, j = arr.length - 1;
  while(i <= j) {
    if(arr[i] * arr[i] < arr[j] * arr[j]) {
      result[k--] = arr[j] * arr[j];
      j--;
    } else {
      result[k--] = arr[i] * arr[i];
      i++;
    }
  }
  return result
}

console.log(squareArr([-6,-5,1,2,3,4]));