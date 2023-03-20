const middleLinkedList_test = require('../middle-linked-list');


describe('middleLinkedList_test', () => {
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
    expect(middleLinkedList_test(head)).toEqual(3);
    head.next.next.next.next.next = new Node(6)
    expect(middleLinkedList_test(head)).toEqual(4);
    head.next.next.next.next.next.next = new Node(7)
    expect(middleLinkedList_test(head)).toEqual(4);
  })
  })
