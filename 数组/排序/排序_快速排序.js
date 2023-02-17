function quickSort(arr) {
  if(arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const midValue = arr.splice(mid, 1)[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] > midValue ? rightArr.push(arr[i]) : leftArr.push(arr[i]);
  };
  return quickSort(leftArr).concat([midValue], quickSort(rightArr));
}
console.log(quickSort([3,2,8,4,7,10,6,1,5,9]));
