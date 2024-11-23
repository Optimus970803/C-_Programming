class Stack {
  constructor() {
    this.item = [];
  }

  push = (element) => this.item.push(element);

  pop = () => {
    if (this.isEmpty()) {
      return null;
    }
    return this.item.pop();
  };

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.item[this.item.length - 1];
  }

  isEmpty = () => this.item.length === 0;
}

const stack = new Stack();
stack.push("Google");
stack.push("Udemy");
stack.push("Discort");
// console.log(stack.peek());
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
