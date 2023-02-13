class Difference {
  diff = [];
  constructor(arr) {
    this.diff[0] = arr[0];
    for(let i = 1; i < arr.length; i ++) {
      this.diff[i] = arr[i] - arr[i-1];
    }
  }

  increment(i, j, num) {
    this.diff[i] += num;
    if(j + 1 < this.diff.length) {
      this.diff[j + 1] -= num;
    }
  }

  result() {
    let res = [];
    res[0] = this.diff[0]
    for(let i = 1; i < this.diff.length; i++) {
      res[i] = res[i-1] + this.diff[i];
    }
    return res
  }
}

let arr = new Difference([8,2,6,3,1])
console.log(arr.diff);
arr.increment(1,3,3);
console.log(arr.diff)
console.log(arr.result())
