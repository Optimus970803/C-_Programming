## What is Queue?

>[!NOTE]
>A queue is a linear data structure that operates on the First In, First Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed, similar to a real-world queue (e.g., waiting in line).

### Key Features of a Queue:
FIFO Order: The element that enters the queue first will be the first one to leave.
Operations at Both Ends:
 - Enqueue: Add an element to the back of the queue.
 - Dequeue: Remove an element from the front of the queue

### Common Queue Operations:
- Enqueue: Add an element to the rear (end) of the queue.
- Dequeue: Remove and return the element from the front of the queue.
- Peek/Front: View the element at the front without removing it.
- IsEmpty: Check if the queue is empty.
- IsFull (optional): Check if the queue has reached its maximum capacity (in case of a fixed-size queue).

### Types of Queues:
Simple Queue:
- Standard FIFO implementation.
  
Circular Queue:
- The rear wraps around to the front when the end of the queue is reached, maximizing space in a fixed-size queue.
  
Priority Queue:
- Elements are dequeued based on priority, not just the order of insertion.

Double-Ended Queue (Deque):
- Elements can be added or removed from both the front and rear.

### Applications of Queues:
- Task Scheduling: In operating systems, managing processes or tasks.
- Data Buffering: Handling data streams like in IO Buffers.
- Breadth-First Search (BFS): For graph and tree traversals.
- Printer Queue: Managing print jobs.
- Call Center Systems: Queueing customer calls.

### Queue Implementation
Using an Array:
```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift(); // Remove the first element
  }

  // View the front element
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0]; // Return the first element
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }
}

// Example Usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.size()); // 2
console.log(queue.front()); // 20
```

### Using a Linked List:
Using a linked list is often more efficient for queues, especially for large data, because enqueueing and dequeueing are O(1) operations.
```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // Points to the front of the queue
    this.rear = null;  // Points to the rear of the queue
    this.length = 0;   // Tracks the size of the queue
  }

  // Add an element to the queue
  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode; // If empty, both front and rear point to the new node
      this.rear = newNode;
    } else {
      this.rear.next = newNode; // Link the new node to the rear
      this.rear = newNode; // Update rear to the new node
    }
    this.length++;
  }

  // Remove and return the front element
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const dequeuedData = this.front.data;
    this.front = this.front.next; // Move front to the next node
    if (!this.front) {
      this.rear = null; // If the queue becomes empty, set rear to null
    }
    this.length--;
    return dequeuedData;
  }

  // View the front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.front.data;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.length;
  }
}

// Example Usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front:", queue.peek()); // Front: 10
console.log(queue.dequeue()); // 10
console.log("Size:", queue.size()); // Size: 2
console.log("Front:", queue.peek()); // Front: 20
```

### Key Differences Between Stack and Queue:

| Feature  |	Stack  |	Queue |
|-- |--|---|
| Principle	| LIFO (Last In, First Out) |	FIFO (First In, First Out) |
| Operations	 | Push, Pop, Peek	| Enqueue, Dequeue, Peek |
| Access Points | 	Operates on the top only	| Operates on front and rear |
