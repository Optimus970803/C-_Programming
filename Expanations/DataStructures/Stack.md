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

Array Implementation
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
### Stack Implementation Using Linked List

>In a linked list, each element (node) points to the next element in the list, so instead of using an array, we create >nodes where each node contains a value and a reference (pointer) to the next node. In this implementation, we always >operate on the top node (head of the list).

Singly Linked List Example (JavaScript):
```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;  // Initially, the stack is empty, so the top is null
  }

  // Add an element to the stack
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;  // Point new node's next to the current top
    this.top = newNode;  // Update top to be the new node
  }

  // Remove and return the element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedData = this.top.data;  // Get the data from the top node
    this.top = this.top.next;  // Move the top to the next node
    return poppedData;  // Return the data of the popped node
  }

  // View the element at the top of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.data;  // Return the data of the top node
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null;  // If top is null, the stack is empty
  }
}

// Example Usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());  // 30
console.log(stack.pop());   // 30
console.log(stack.pop());   // 20
console.log(stack.isEmpty()); // false
console.log(stack.peek());  // 10

```
### Advantages of Using Linked List for Stack:
- Dynamic Size: The stack can grow or shrink dynamically because the linked list does not require a fixed size.
- Efficient Memory Usage: Nodes are only created when needed, unlike an array that may pre-allocate memory.

### Why this.bottom is not included?:
Definition of a Stack:
 - A stack primarily operates on the top of the structure (LIFO principle). The bottom (or base) of the stack is rarely needed in standard stack operations (push, pop, peek).
Since the operations only modify or access the top, keeping track of the bottom adds overhead that isn't necessary for core functionality.

Linked List Nature:
- In a linked list, the bottom is the first node inserted, and finding it would typically involve traversing the entire stack (O(n) time). Unless explicitly needed, this is avoided for efficiency.

### Why this.length is not included?
Efficiency:
- Keeping track of the length requires extra maintenance during every push and pop operation (incrementing or decrementing the length). While this is a small cost, it’s not strictly necessary for basic stack operations.
- You can still calculate the length by traversing the stack (O(n)), though this is inefficient for frequent use.

Minimalism:
- The simplest implementation of a stack focuses only on top and the essential operations.

### Adding this.bottom and this.length:
If you need additional functionality, like accessing the bottom element or knowing the size of the stack efficiently, you can add this.bottom and this.length.

### Modified Implementation with this.bottom and this.length:
```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;     // Points to the top of the stack
    this.bottom = null;  // Points to the bottom of the stack
    this.length = 0;     // Tracks the number of elements in the stack
  }

  // Add an element to the stack
  push(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode; // If the stack was empty, the new node is both top and bottom
    } else {
      newNode.next = this.top; // Link new node to the current top
      this.top = newNode;      // Update top to the new node
    }
    this.length++; // Increment length
  }

  // Remove and return the element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedData = this.top.data;
    this.top = this.top.next; // Move the top to the next node
    if (this.top === null) {
      this.bottom = null; // If the stack becomes empty, update bottom
    }
    this.length--; // Decrement length
    return poppedData;
  }

  // View the top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.data;
  }

  // View the bottom element
  getBottom() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.bottom.data;
  }

  // Get the number of elements in the stack
  size() {
    return this.length;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.length === 0;
  }
}

// Example Usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top:", stack.peek());        // Top: 30
console.log("Bottom:", stack.getBottom()); // Bottom: 10
console.log("Size:", stack.size());        // Size: 3
console.log(stack.pop());                  // 30
console.log("Size after pop:", stack.size()); // Size after pop: 2
console.log("Bottom after pop:", stack.getBottom()); // Bottom after pop: 10
```

### Advantages of Adding bottom and length:
 - Efficiently access the bottom element in O(1) time.
 - Efficiently track the size of the stack without traversing it.

