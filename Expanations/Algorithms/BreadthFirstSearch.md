### Breadth-First Search (BFS) 
Here's a simple implementation of a Binary Search Tree (BST) with a breadth-first search (BFS) in JavaScript:

### Binary Search Tree (BST) Class:
```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a node into the BST
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Perform a breadth-first search (BFS)
  breadthFirstSearch() {
    if (this.root === null) return [];

    let queue = [this.root];  // Start with the root node
    let result = [];

    while (queue.length > 0) {
      let currentNode = queue.shift();  // Dequeue the first node
      result.push(currentNode.value);

      // Enqueue the left and right children
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
  }
}

// Example Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log("BFS Traversal: ", bst.breadthFirstSearch());

```

### Explanation:
- Node class: Each node has a value and two children, left and right.
- BinarySearchTree class: Manages the root of the tree and provides methods to insert nodes and perform BFS.
- Insert Method: Adds new values to the BST following the property: left child < parent < right child.
- BFS Method: Uses a queue to traverse the tree level by level and collects node values in an array.
