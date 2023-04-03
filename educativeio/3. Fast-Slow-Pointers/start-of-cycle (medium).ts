//find the cycle using slow/fast pointer method
//count the length of the cycle
//find the start of the cycle by init a pointer at head + cycle length, and a pointer at head. Increment pointers until they meet and return that node

//init slow, fast = head
//while fast and fast.next are not null
  //increment slow by 1 node and fast by 2 nodes
  //if slow === fast, we found the cycle, find cycle length and break
//find start of cycle with head and cycle length and return

//define func to count cycle length
  //init counter = 0, pointer = slow
  //while true
    //increment pointer
    //if pointer === slow, return counter
//define func to find start of cycle
  //init pointer1, pointer2 = head
  //while counter > 0
    //increment pointer2
  //while true
    //increment pointer1 and pointer2
    //if pointer1 === pointer2, return pointer2
function startOfCycle(head): number {
let slow = head,
  fast = head,
  cycle_length = 0;
while (fast != null && fast.next != null) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) { //found cycle
    cycle_length = countCycle(slow);
    break;
  }
}
return findStart(head, cycle_length); 
}

function countCycle(slow): number {
  let counter = 0,
    pointer = slow
  while (true) {
    pointer = pointer.next;
    counter += 1;
    if (pointer === slow) return counter;
  }
};

function findStart(head, cycleLength): number{
  let pointer1 = head,
    pointer2 = head;
  while (cycleLength > 0) {
    pointer2 = pointer2.next;
    cycleLength -= 1;
  }
  while (true) {
    if (pointer1 === pointer2) return pointer2.value;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
}


module.exports = startOfCycle;
