class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.button = null;
    this.length = 0;
  }

  peek = () => this.top;

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.button = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.button) {
      this.button = null;
    }

    const temp = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty = () => !this.length;
}

const stack = new Stack();
stack.push("Google");
stack.push("Udemy");
stack.push("Discort");
// console.log(stack.peek());
stack.pop();
// stack.pop();
// stack.pop();
console.log(stack);
