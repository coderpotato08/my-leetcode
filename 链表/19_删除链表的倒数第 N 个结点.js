const {List, ListNode} = require("./List")
function removeNthFromEnd(head, n) {
  let vHead = new ListNode(null, head);
  let p = vHead, q = vHead;
  for (let i = 0; i < n + 1; i++) {
    q = q.next
  }
  while(q) {
    q = q.next;
    p = p.next;
  }
  p.next = p.next.next;
  return vHead.next
}

const head = new List([1,2,3,4,5])
removeNthFromEnd(head.head, 2)
head.display();
