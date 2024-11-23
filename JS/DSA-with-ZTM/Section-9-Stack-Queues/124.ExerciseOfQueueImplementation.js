class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.last;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.first === this.last) {
      this.last = null;
      this.first = null;
    } else {
      const first = this.first;
      this.first = this.first.next;

      this.length--;
    }
  }

  isEmpty = () => !this.length;
}

const queue = new Queue();
queue.enqueue("Joy");
queue.enqueue("Matt");
queue.enqueue("Pavel");
queue.enqueue("Samir");
queue.dequeue();
queue.dequeue();

console.log(queue);
