import { Node } from "./utils/classes"

//find the middle of the list using slow and fast pointers
//reverse the 2nd half of the list
//iterate through the lists and insert the 2nd half nodes accordingly

//init slow and fast pointers = head
//traverse pointers while fast and fast.next not null
//reverse the list starting at slow
//init pointer 1 = head and pointer2 = slow
//while pointer1 != slow && pointer2 != null
  //pointer2.next = pointer1.next
  //pointer1.next = pointer2
  //increment pointers
//return head

function rearrangeLL(head): Node | null{
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondHalf = reverse(slow);
  let firstHalf = head
  while (firstHalf != null && secondHalf != null) {
    let temp = firstHalf.next;
    firstHalf.next = secondHalf;
    firstHalf = temp;
    temp = secondHalf.next;
    secondHalf.next = firstHalf;
    secondHalf = temp;
  }
  if (firstHalf != null) {
    firstHalf.next = null;
  }
  // printList(head)
  return head;
};

function reverse (head): Node | null {
  let prev: null | Node = null;
  while (head != null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  };
  return prev;
}

function printList (head): void {
  while (head != null) {
    console.log(head.value);
    head = head.next;
  }
}

module.exports = rearrangeLL;
      