## What is Bunary Tree? 

>[!NODE]
>A Binary Tree is a type of hierarchical data structure in which each node has at most two children, commonly referred to as the left child and the right child. Binary trees are a fundamental concept in computer science, often used in searching, sorting, and hierarchical data storage.

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*5ky_fbOCCk557ZRiYAiCmw.png"/>

### Key Characteristics of a Binary Tree:
1.Node: The basic element of the binary tree that contains:
- Data: The value stored in the node.
- Left Child: A pointer/reference to the left child node (or null if there is no child).
- Right Child: A pointer/reference to the right child node (or null if there is no child).
2.Root Node: The topmost node in the tree.
3.Leaf Node: A node with no children.
4.Height: The longest path from the root to a leaf node.


### Types of Binary Trees:
1.Full Binary Tree:
- Every node has either 0 or 2 children.
- No node has only one child.

2.Complete Binary Tree:
- All levels, except possibly the last, are completely filled.
- All nodes in the last level are as far left as possible.
  
3.Perfect Binary Tree:
- All internal nodes have exactly 2 children, and all leaf nodes are at the same level.
  
4.Balanced Binary Tree:
- The difference between the heights of the left and right subtrees of any node is at most 1.
- Examples include AVL trees and Red-Black trees.
  
Skewed Binary Tree:
- All nodes have only one child.
- Can be either left-skewed (all children are left) or right-skewed (all children are right).
  
Binary Search Tree (BST):
- A binary tree where the left subtree of a node contains only nodes with values less than the node’s value, and the right subtree contains only nodes with values greater than the node’s value.
- <img src="https://courses.grainger.illinois.edu/cs225/fa2019/assets/notes/bst/bsttreetraversal.png" height="300px" width="full"/>

<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*CMGFtehu01ZEBgzHG71sMg.png"/>

### Operations on a Binary Tree:
1.Traversal:
- Preorder Traversal: Visit the root, then the left subtree, followed by the right subtree.
- Inorder Traversal: Visit the left subtree, then the root, followed by the right subtree.
- Postorder Traversal: Visit the left subtree, the right subtree, and finally the root.
- Level Order Traversal: Visit nodes level by level, typically using a queue.

2.Insertion:
- Add a new node while maintaining the binary tree properties.
  
3.Deletion:
- Remove a node and adjust the tree to preserve its structure.
  
4.Search:
- Find a node with a specific value.
  
5.Height Calculation:
- Determine the height (maximum depth) of the tree.
  
6.Count Nodes:
- Count the total number of nodes in the tree.

### Applications of Binary Trees:
- Expression Trees: Represent mathematical expressions.
- Binary Search Trees (BST): Enable efficient searching, insertion, and deletion operations.
- Heap Trees: Used in priority queues and heap sort.
- Huffman Trees: For data compression.
- Decision Trees: Used in machine learning and decision-making processes.
