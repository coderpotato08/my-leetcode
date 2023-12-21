var oddEvenList = function(head) {
  if (!head) return head;
  let oddP = head, evenP = head.next, evenHead = evenP;
  while(evenP !== null && evenP.next !== null) {
      oddP.next = evenP.next;
      oddP = oddP.next;
      evenP.next = oddP.next;
      evenP = evenP.next
  }
  oddP.next = evenHead;
  return head
};