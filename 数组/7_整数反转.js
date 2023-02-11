function reverse(x) {
  let res = 0;
  let temp = x > 0 ? x : -x;
  while(temp > 0) {
    res = res * 10 + temp % 10;
    if (res > Math.pow(2, 31)) return 0
    temp = Math.floor(temp / 10);
  }
  return x > 0 ? res : -res;
}

console.log(reverse(1534236469))


