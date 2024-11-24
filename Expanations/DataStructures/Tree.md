## What is Tree ?

>[!NOTE]
>A tree in data structures is a hierarchical data structure that consists of nodes connected by edges. It is a widely used structure that mimics a tree in nature, with a root at the top and leaves at the bottom. Trees are used to represent relationships, organize data hierarchically, and efficiently perform search and traversal operations.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240415185343/tree-data-structure-banners-(2).webp" />

### Key Characteristics of a Tree:
- Root Node: The topmost node in a tree. It is the starting point, and every tree has exactly one root.
- Child Node: Nodes directly connected to another node, branching out from it.
- Parent Node: A node that has one or more child nodes.
- Leaf Node: A node that has no children (also called terminal nodes).
- Edge: The connection between two nodes.
- Subtree: A tree that is part of another tree, rooted at a child node.
- Depth: The length of the path from the root to a specific node.
- Height: The length of the longest path from a node to its deepest descendant.
- Path: A sequence of nodes and edges connecting a node to another.


### Properties of Trees:
- Acyclic: Trees do not contain cycles.
- Connected: There is exactly one path between any two nodes.
- For a tree with 𝑛 nodes, there are 𝑛 − 1 edges.

### Types of Trees:
- Binary Tree: Each node has at most two children.
- Binary Search Tree (BST): A binary tree where the left child contains nodes with values less than the parent, and the right child contains nodes with values greater than the parent.
- AVL Tree: A self-balancing binary search tree.
- Red-Black Tree: Another self-balancing binary search tree with specific balancing rules.
- N-ary Tree: Each node can have at most 𝑁 children.
- Trie (Prefix Tree): Used for storing strings in a way that facilitates fast prefix searches.
- Heap: A specialized tree-based structure that satisfies the heap property (min-heap or max-heap).


### Common Operations:
Traversal: Visiting nodes in a tree, typically in one of the following orders:
- Preorder: Visit the root, then the left subtree, and finally the right subtree.
- Inorder: Visit the left subtree, the root, and then the right subtree.
- Postorder: Visit the left subtree, the right subtree, and finally the root.
- Level Order: Traverse nodes level by level, typically using a queue.
Search: Look for a specific value in the tree.
Insertion and Deletion: Add or remove nodes while maintaining the tree structure.

### Applications of Trees:
- File Systems: Represent directories and files hierarchically.
- Databases: Use B-trees and B+ trees for indexing and searching.
- Compiler Design: Abstract syntax trees represent expressions and code.
- Networking: Spanning trees manage routing and connections.
- Artificial Intelligence: Decision trees are used in machine learning algorithms.
