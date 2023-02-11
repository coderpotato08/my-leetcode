const {List} = require("./List")

function deleteDuplicates(head) {
  if(!head) return head;
  let cur = head
  while(cur.next) {
    if(cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next
    }
  }
  return head
};

const list = new List([1,1,1,2,2,2,3,4,4,4,5]);
list.head = deleteDuplicates(list.head);
list.display()
