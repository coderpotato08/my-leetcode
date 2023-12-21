// function mergeSort(arr) {
//   if(arr.length < 2) return arr;
//   process(arr, 0, arr.length - 1);
//   console.log(arr);
// }
// function process(arr, left, right) {
//   if(left == right) {
//     return;
//   }
//   const mid = left + ((right - left) >> 1);
//   process(arr, left, mid);
//   process(arr, mid + 1, right);
//   merge(arr, left, mid, right);
// }
// function merge(arr, left, mid, right) {
//   let temp = []
//   for(let i = left; i <= right; i++) {
//     temp[i] = arr[i]
//   }
//   let i = left, j = mid + 1;
//   let p = left;
//   while(p <= right) {
//     if(i === mid + 1) {
//       arr[p++] = temp[j++]
//     } else if(j === right + 1) {
//       arr[p++] = temp[i++]
//     } else if(temp[i] <= temp[j]) {
//       arr[p++] = temp[i++]
//     } else {
//       arr[p++] = temp[j++]
//     }
//   }
// }

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  process(arr, 0, arr.length-1)
  console.log(arr);
}

function process(arr, left, right) {
  if (left == right) return;
  let mid = left + ((right - left) >> 1);
  process(arr, left, mid);
  process(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  let temp = [];
  for(let i = left; i <= right; i++) {
    temp[i] = arr[i];
  }
  let l = left, r = mid + 1;
  let p = left;
  while (p <= right) {
    if (l === mid + 1) {
      arr[p++] = temp[r++]
    } else if (r === right + 1) {
      arr[p++] = temp[l++]
    } else if (temp[l] <= temp[r]) {
      arr[p++] = temp[l++]
    } else {
      arr[p++] = temp[r++]
    }
  }
}

mergeSort([8,4,2,3,7,6,1,5,9,10])
