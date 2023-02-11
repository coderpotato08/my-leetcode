const {ListNode, List} = require("./List")

function reverseKGroup(head, k) {
  // 需要存放三个指针变量 pre指向上次k组已翻转的链表尾部 end指向当前k组未翻转链表尾 next指向end之后k组待翻转链表头
  // 首先进行k次循环找到end，end为null说明当前k组元素不够，直接结束循环
  // 然后初始化start end，开始翻转
  // 每次遍历翻转完后 pre.next => reverse list; start.next => next; pre => start; end => pre;
  function reserve(node) {
    let pre = null, cur = node;
    while(cur) {
      let next = cur.next
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy, end = dummy;
  while(end.next) {
    for(let i = 0; i < k && end !== null; i++) {
      end = end.next;
    }
    if(!end) break;
    let start = pre.next, next = end.next;
    end.next = null;
    pre.next = reserve(start);
    start.next = next;
    pre = start;
    end = pre;
  }
  return dummy.next
};

const list = new List([1,2,3,4,5,6,7,8,9])
list.head = reverseKGroup(list.head, 4);
list.display();
