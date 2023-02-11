function mergeSort(arr) {
  if(arr.length < 2) return arr;
  process(arr, 0, arr.length - 1);
  console.log(arr);
}
function process(arr, left, right) {
  if(left == right) {
    return;
  }
  const mid = left + ((right - left) >> 1);
  process(arr, left, mid);
  process(arr, mid + 1, right);
  merge(arr, left, mid, right);
}
function merge(arr, left, mid, right) {
  let temp = [];
  let p1 = left, p2 = mid + 1, i = 0;
  while(p1 <= mid && p2 <= right) {
    temp[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  while(p1 <= mid) {
    temp[i++] = arr[p1++]
  }
  while(p2 <= right) {
    temp[i++] = arr[p2++]
  }
  for(let index = 0; index < temp.length; index ++) {
    arr[left + index] = temp[index];
  }
}

mergeSort([3,2,8,4,7,10,6,1,5,9])