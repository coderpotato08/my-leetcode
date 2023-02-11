function insertSort(arr) {
  let result = [];
  result.push(arr[0]);
  for(let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    for(let j = result.length - 1; j >=0; j--) {
      if(cur > result[j]) {
        result.splice(j + 1, 0, cur);
        break;
      }
      if(j == 0) {
        result.unshift(cur)
      }
    }
  }
  console.log(result);
}

insertSort([3,2,8,4,7,10,6,1,5,9])