const {ListNode, List} = require("./List")

function reverseBetween(head, left, right) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let pre = dummy;
  // 找到开始前一个节点
  for(let i = 1; i < left; i++) {
    pre = pre.next
  }
  head = pre.next
  for(let i = left; i < right; i++) {
    let next = head.next
    head.next = head.next.next;
    next.next = pre.next;
    pre.next = next
  }
  return dummy.next
};
