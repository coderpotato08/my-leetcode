class Heap {
  constructor(arr = [], cmp = (a, b) => a < b) {
    this.arr = arr
    this.cmp = (a, b) => cmp(a, b);
    this.headify();
  }

  headify() {
    if(this.size() <= 1) return;
    for(let i = 1; i < this.size(); i++) {
      this.bubbleUp(i)
    }
  }

  size() {
    return this.arr.length
  }

  top() {
    if(!this.size()) return null;
    return this.arr[0]
  }

  push(val) {
    this.arr.push(val);
    this.bubbleUp(this.size() - 1)
  }

  pop() {
    if(!this.size()) return;
    if(this.size() == 1) return this.arr.pop();
    const top = this.top();
    this.arr[0] = this.arr.pop();
    this.bubbleDown(0);
    return top;
  }

  bubbleUp(index) {
    while(index) {
      const parentIndex = (index - 1) >>> 1;
      if (this.cmp(this.arr[index], this.arr[parentIndex])) {
        [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]]
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.size() - 1 // 确定边界值
    while(index < lastIndex) {
      // 二叉树 左子节点索引 2n + 1 右子节点索引 2(n+1)
      let findIndex = index, leftIndex = 2 * index + 1, rightIndex = 2 * (index + 1)
      if (leftIndex <= lastIndex && this.cmp(this.arr[leftIndex], this.arr[findIndex])) {
        findIndex = leftIndex;
      }
      if (rightIndex <= lastIndex && this.cmp(this.arr[rightIndex], this.arr[findIndex])) {
        findIndex = rightIndex;
      }
      if (findIndex > index) {
        [this.arr[findIndex], this.arr[index]] = [this.arr[index], this.arr[findIndex]]
        index = findIndex
      } else {
        break;
      }
    }
  }
}

let arr = [8, 11, 17, 5, 6, 12, 19, 1, 14]
const heap = new Heap(arr);
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())