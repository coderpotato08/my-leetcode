function convert(s, numRows) {
  if (numRows == 1) return s;
  let result = ""
  let rows = new Array(numRows).fill([]);
  let n = 2 * numRows - 2;    // 每轮字符个数；
  for (let i = 0; i < s.length; i++) {
    let x = i % n;
    rows[Math.min(x, n - x)] += s[i]
  };
  for (let row of rows) {
    result += row;
  }
  return result
};

console.log(convert("PAYPALISHIRING", 4))
