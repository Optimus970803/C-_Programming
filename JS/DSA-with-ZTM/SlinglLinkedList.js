class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this;
  }

  print() {
    let currentNode = this.head;
    if (this.head.next === null) console.log(this.head.value);
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  sort() {
    //challange;
  }
}

const list = new SinglyLinkedList();
list.append(40);
list.append(30);
list.append(20);
list.append(10);
console.log(list);
list.print();
