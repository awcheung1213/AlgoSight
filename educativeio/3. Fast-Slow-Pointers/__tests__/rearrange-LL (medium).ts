const rearrangeLL_test = require('../rearrange-LL (medium)');


describe('rearrangeLL_test', () => {
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
    head.next.next.next = new Node(8)
    head.next.next.next.next = new Node(10)
    head.next.next.next.next.next = new Node(12)
    let answer = new Node(2)
    answer.next = new Node(12)
    answer.next.next = new Node(4)
    answer.next.next.next = new Node(10)
    answer.next.next.next.next = new Node(6)
    answer.next.next.next.next.next = new Node(8)
    expect(rearrangeLL_test(head)).toEqual(answer);
  })
})
