import { Node } from "./utils/classes"

//find middle of linked list
//reverse the 2nd half of the linked list
//compare the first and second half of the linked list
//reverse the 2nd half of the linked list again
//return boolean of comparison

function palindromeLL(head): boolean {
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let reversedHalf: null | Node = reverseLL(slow);
  let copyReversedHalf = reversedHalf;
  while (head != null && reversedHalf != null) {
    if (head.value !== reversedHalf.value) return false;
    head = head.next;
    reversedHalf = reversedHalf.next;
  }
  reverseLL(copyReversedHalf)
  return true;
}

function reverseLL(head): Node | null {
  let prev: null | Node = null
  while (head != null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
// 2 -> 4 -> 6 -> 4 -> 2 -> null
module.exports = palindromeLL;
      