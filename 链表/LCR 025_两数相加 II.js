const { List, ListNode } = require('./List')

const addTwoNumbers = function(l1, l2) {
  const s1=[], s2=[];
  while(l1) {
      s1.push(l1.val)
      l1 = l1.next
  };
  while(l2) {
      s2.push(l2.val)
      l2 = l2.next
  };
  let c=0, res=[]
  while(c || s1.length || s2.length) {
      let n1 = s1.pop() || 0, n2 = s2.pop() || 0;
      let cur = (c + n1 + n2) % 10;
      c = (c + n1 + n2) >= 10 ? 1 : 0;
      res.push(cur)
  }
  let head = new ListNode(-1, null), cur = head;
  while(res.length) {
      let node = new ListNode(res.pop(), null);
      cur.next = node;
      cur = cur.next;
  }
  return head.next
};

const l1 = new List([7,2,4,3]).head, l2 = new List([5,6,4]).head
console.log(l1, l2)
console.log(addTwoNumbers(l1, l2))