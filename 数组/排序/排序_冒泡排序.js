function bubbleSort(arr) {
  const len = arr.length;
  for(let i = 0; i < len; i++){
    for(let j = i; j < len; j++) {
      if(arr[i] > arr[j]) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t
      }
    }
  }
  console.log(arr);
}
bubbleSort([3,2,8,4,7,10,6,1,5,9])