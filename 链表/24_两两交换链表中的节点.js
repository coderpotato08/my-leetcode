const {List, ListNode} = require("./List")

function swapPairs(head) {
  if (!head || !head.next) return head;
  let cur = head, next = head.next;
  let nextList = swapPairs(next.next);
  next.next = cur;
  cur.next = nextList;
  return next;
};

const list = new List([1,2,3,4,5,6,7])
list.head = swapPairs(list.head);
list.display();
