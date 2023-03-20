const startOfCycle_test = require('../start-of-cycle');


describe('startOfCycle_test', () => {
  test('should', () => {
    class Node<T> { 
      value: T
      next: Node<T> | null
      constructor(value: T, next = null ){
        this.value = value,
        this.next = next
      }
    }
    let head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next.next = new Node(6)
    head.next.next.next.next.next.next = head.next.next 
    expect(startOfCycle_test(head)).toEqual(3);
    head.next.next.next.next.next.next = head.next.next.next 
    expect(startOfCycle_test(head)).toEqual(4);
    head.next.next.next.next.next.next = head
    expect(startOfCycle_test(head)).toEqual(1);
  })
  })
