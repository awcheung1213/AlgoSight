//use two pointers, one traveling 1 node and the other 2 nodes at a time. if fast pointer reaches null return false, else if fast pointer ever === slow pointer return true
//init slow pointer and fast pointer === head 
//while fast pointer != null
  //if fast pointer === slow pointer return true
  //update slow and fast pointers
//return false
function linkedListCycle(head): boolean {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
}

module.exports = linkedListCycle;
