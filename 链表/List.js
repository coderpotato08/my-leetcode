function ListNode(val, next) {
  this.val = val
  this.next = next
}
class List {
  constructor(arr) {
    this.head = new ListNode(arr.shift(), null);
    let i = 0, p = this.head;
    while(i < arr.length) {
      p.next = new ListNode(arr[i], null);
      p = p.next;
      i ++;
    }
  }
  display() {
    let p = this.head, res = [];
    while (p) {
      res.push(p.val);
      p = p.next;
    }
    console.log(res)
  }
}

module.exports = {
  List,
  ListNode
}
