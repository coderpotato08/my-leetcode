function corpFlightBookings(bookings, n) {
  // 构造差分数组，由于初始值都是0，所以差分数组值都为0
  let diff = new Array(n).fill(0);
  let res = []
  // 修改开始与结束后一位的叉分值
  // i～j位加n，就相当于i位的差分值+n j+1位差分值-n O(n) => O(1)
  for(let i = 0; i < bookings.length; i++) {
    const[first, last, seat] = bookings[i];
    diff[first - 1] += seat;
    if(last < diff.length) {
      diff[last] -= seat
    }
  }
  res[0] = diff[0]
  // 根据差分值求出累加处理后的数组
  for(let i = 1; i < diff.length; i++) {
    res[i] = res[i-1] + diff[i]
  }
  return res
};
