// let myLinkedList = {
//   head: { value: 0, next: {} },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index > this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = {
      value: value,
      next: null,
    };
    let currentNode = this.head;
    let perviousNode = this.head;
    let i = 0;
    while (i < index) {
      i++;
      perviousNode = currentNode;
      currentNode = currentNode.next;
    }
    newNode.next = currentNode;
    perviousNode.next = newNode;
    this.length++;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(40);
myLinkedList.insert(1, 50);
myLinkedList.insert(0, 60);
myLinkedList.insert(11, 70);

console.log(myLinkedList.printList());
