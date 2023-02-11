function selectSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j ++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let t = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = t
  }
  console.log(arr)
}
selectSort([3,2,8,4,7,10,6,1,5,9])