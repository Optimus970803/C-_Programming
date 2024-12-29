# What is Binary Heap?
>[!TIP]
>A binary heap is a specialized tree-based data structure that satisfies the heap property and is used primarily in priority queues and efficient sorting algorithms like Heapsort.
## Characteristics of a Binary Heap:
### 1. Complete Binary Tree:
- A binary heap is a complete binary tree, meaning all levels are completely filled except possibly the last level, which is filled from left to right.

### 2.Heap Property:
- Max-Heap: In a max-heap, every parent node has a value greater than or equal to its children.
- Min-Heap: In a min-heap, every parent node has a value less than or equal to its children.

## Representation:
- Binary heaps are often implemented using arrays for efficient storage.
- For a node at index i :
  - Left child is at 2i+1.
  - Right child is at 2i+2.
  - Parent is at ⌊(i−1)/2⌋.

## Operations:
### 1.Insert:
- Add the new element at the end of the heap (to maintain the complete binary tree property).
- Perform an up-heap or bubble-up operation to restore the heap property by swapping the element with its parent as needed.

### 2.Extract (Maximum/Minimum):
- Remove the root (the maximum in a max-heap or minimum in a min-heap).
- Replace the root with the last element and perform a down-heap or heapify operation to restore the heap property.

### 3.Peek:
- Return the root element (maximum in max-heap or minimum in min-heap) without removing it.

### 4.Build Heap:
- Convert an arbitrary array into a binary heap in O(n) time using a bottom-up approach.

## Applications:
- Priority Queues: Efficient insertion and deletion of elements based on priority.
- Heapsort: A sorting algorithm with O(nlogn) time complexity.
- Graph Algorithms: Used in algorithms like Dijkstra’s shortest path and Prim’s minimum spanning tree.

### Example of a Min-Heap:
```markdown
       10
      /  \
     20   30
    / \   / \
   40 50 60 70
```
Array representation: [10, 20, 30, 40, 50, 60, 70]
