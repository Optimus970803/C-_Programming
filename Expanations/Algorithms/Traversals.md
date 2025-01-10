## What is Traversals of Graph or Tree?

>[!NOTE]
>Traversals of graphs and trees are methods used to visit all the nodes in these data structures systematically. Let's break down the concepts for both trees and graphs:

## Tree Traversals
A tree is a hierarchical data structure consisting of nodes. There are several ways to traverse a tree:
### 1. Inorder Traversal (Left, Root, Right)
- Visit the left subtree.
- Visit the root node.
- Visit the right subtree.
- Used in binary search trees to get nodes in sorted order
### 2. Preorder Traversal (Root, Left, Right)
- Visit the root node.
- Visit the left subtree.
- Visit the right subtree.
- Used for copying trees or creating a prefix expression of a tree.

### 3. Postorder Traversal (Left, Right, Root)
- Visit the left subtree.
- Visit the right subtree.
- Visit the root node.
- Used for deleting trees or creating a postfix expression of a tree.

### 4. Level Order Traversal (Breadth-First)
- Visit nodes level by level from top to bottom, left to right.
- Uses a queue to facilitate the breadth-first approach.

## Graph Traversals
Graphs consist of nodes (vertices) and edges. There are two primary methods for graph traversal:
### Depth-First Search (DFS)
- Explore as far as possible along each branch before backtracking.
- Uses a stack (or recursion) to keep track of the path.
- Useful for finding connected components, topological sorting, and solving puzzles (like mazes).

### Breadth-First Search (BFS)
- Explore all the neighbors of a node before moving on to the next level.
- Uses a queue to maintain the order of exploration.
- Useful for finding the shortest path in unweighted graphs, level order traversal, and checking bipartiteness.

### Summary
- Tree Traversals: Focus on systematic visits like inorder, preorder, postorder, and level order.
- Graph Traversals: DFS explores deep paths first, while BFS explores wide levels first.
