export class Node { 
  value: unknown
  next: Node | null
  constructor(value: unknown, next = null ){
    this.value = value,
    this.next = next
  }
};