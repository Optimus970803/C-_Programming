## WHat is Stack?
>[!NOTE]
>A stack is a linear data structure that operates on a Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. You can think of it like a stack of plates where you add plates on top and take plates off the top.

### Key Operations of a Stack:
- Push: Adds an element to the top of the stack.
- Pop: Removes and returns the element at the top of the stack.
- Peek/Top: Returns the element at the top of the stack without removing it.
- IsEmpty: Checks if the stack is empty.
- IsFull (optional): Checks if the stack has reached its maximum capacity (if the stack has a fixed size).

### Properties:
- Dynamic Size: The stack can grow or shrink in size depending on whether you're using a dynamic or static stack implementation.
- Restricted Access: Only the top of the stack is accessible for adding or removing elements

### Applications of Stack:
- Expression Evaluation: Used in evaluating postfix or prefix expressions.
- Undo/Redo: In text editors or software with history tracking.
- Function Call Management: Used by the system to manage function calls (call stack).
- Backtracking: For example, solving maze problems or recursion.
- Browser History: Keeping track of visited pages for navigation.

### Implementation:
A stack can be implemented in:
- Array: Simple and fast but has a fixed size unless resized dynamically.
- Linked List: Flexible and can grow as needed, but slightly more complex than arrays.

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // View the top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example Usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop());  // 20
console.log(stack.isEmpty()); // false
```
