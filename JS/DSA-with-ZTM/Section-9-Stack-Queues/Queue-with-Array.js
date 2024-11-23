class Queue {
  constructor() {
    this.queue = [];
  }

  peek() {
    return this.queue[0];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty = () => this.queue.length === 0;
}

const queue = new Queue();
queue.enqueue("Martin");
queue.enqueue("Melmen");
queue.enqueue("Alex");
// console.log(queue.peek());
queue.dequeue();
queue.dequeue();
console.log(queue);
