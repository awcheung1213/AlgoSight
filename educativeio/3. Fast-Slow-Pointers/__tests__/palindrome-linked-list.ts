const palindromeLL_test = require('../palindrome-linked-list');


describe('palindromeLL_test', () => {
  test('should', () => {
    class Node<T> { 
      value: T
      next: Node<T> | null
      constructor(value: T, next = null ){
        this.value = value,
        this.next = next
      }
    }
    let head = new Node(2)
    head.next = new Node(4)
    head.next.next = new Node(6)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(2)
    expect(palindromeLL_test(head)).toEqual(true);
    head.next.next.next.next.next = new Node(2)
    expect(palindromeLL_test(head)).toEqual(false);
  })
})
