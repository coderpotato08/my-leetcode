const {ListNode, List} = require("./List")

function rotateRight(head, k) {
  if(!head || !head.next || k == 0) return head;
  let tol = 0, cur = new ListNode(0, head);
  while(cur.next) {
    tol ++;
    cur = cur.next
  };
  k = k % tol;
  // 链表尾指向头
  cur.next = head;
  cur = cur.next
  // 找到旋转节点
  for(let i = 0; i < tol - k - 1; i++) {
    cur = cur.next;
  }
  let res = cur.next;
  cur.next = null;
  return res
};

const list = new List([1,2,3,4,5])
list.head = rotateRight(list.head, 2);
list.display()
