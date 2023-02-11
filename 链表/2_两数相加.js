const {List, ListNode} = require("./List")

function addTwoNumbers(l1, l2) {
  let c = 0;
  let dummy = new ListNode(0);
  let cur = dummy;
  while(c || l1 || l2) {
    let l1Val = l1 == null ? 0 : l1.val, l2Val = l2 == null ? 0 : l2.val;
    let isNeedCarry = l1Val + l2Val + c >= 10
    let val = isNeedCarry ? (l1Val + l2Val + c) % 10 : l1Val + l2Val + c; // 当前位相加值
    c = isNeedCarry ? 1 : 0;  // 是否进位
    cur.next = new ListNode(val);
    cur = cur.next // 移动指针
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  return dummy.next;
};
