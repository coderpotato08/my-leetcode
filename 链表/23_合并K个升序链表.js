const {List, ListNode} = require("./List")

function mergeKLists (lists) {
  if (!lists.length) {
    return null;
  }
  function merge(l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;
    while(l1 && l2) {
      if(l1.val <= l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    cur.next = l1 === null ? l2 : l1;
    return dummy.next
  };
  function mergeLists(lists, start, end) {
    if (start == end) {
      return lists[start];
    }
    // 输入的k个排序链表，可以分成两部分，前k/2个链表和后k/2个链表
    // 如果将这前k/2个链表和后k/2个链表分别合并成两个排序的链表，再将两个排序的链表合并，那么所有链表都合并了
    let mid = (start + end) >> 1;
    let head1 = mergeLists(lists, start, mid);
    let head2 = mergeLists(lists, mid+1, end);
    console.log(head1, head2)
    return merge(head1, head2);
  };
  return mergeLists(lists, 0, lists.length-1);
};
