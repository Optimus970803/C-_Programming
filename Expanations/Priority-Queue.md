# WHat is Priority Queue?
>[!TIP]
>A Priority Queue is an abstract data structure similar to a queue, but with an added feature: each element has a priority. The elements are dequeued based on their priority rather than their order of arrival.
## Key Characteristics:
- Priority-based Processing: Elements with higher priority are dequeued first, regardless of their insertion order.
- Dynamic Behavior: Elements can have their priorities changed dynamically (in some implementations).

## Types of Priority Queues:
### 1.Max-Priority Queue:
- The element with the highest priority is dequeued first.
- Example: Used in scheduling where the most critical task gets executed first.

### 2.Min-Priority Queue:
- The element with the lowest priority is dequeued first.
- Example: Used in algorithms like Dijkstra's shortest path.

## Implementation:
Priority Queues can be implemented using various data structures:
1.Array or List:
- Simple but not efficient for large datasets.
- Insertion: O(1), Extraction: O(n).

2. Heap (Binary Heap, Fibonacci Heap, etc.):
- Commonly used for efficient implementations.
- Insertion and Extraction: O(logn).

3.Self-balancing Binary Search Tree
- Provides additional flexibility.
- Operations: O(logn).

## Applications:
- Scheduling: CPU scheduling, printer scheduling.
- Graph Algorithms: Dijkstra's and Prim's algorithms.
- Event-driven Simulations: Handling events based on their priority.
- Data Compression: Huffman coding.

### Example:
Imagine a hospital's ER where patients are treated based on the severity of their condition (priority):
- 1.A patient with a critical condition (priority 1) is treated before someone with a mild injury (priority 3), regardless of arrival time.
