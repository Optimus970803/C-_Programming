## Depth First Search (DFS)
Depth First Search (DFS) is an algorithm for traversing or searching through a tree or graph data structure. Starting at the root (or an arbitrary node), it explores as far as possible along each branch before backtracking.

### Key Concepts of DFS:
- Start at the root or a specific node.
- Explore each branch as deeply as possible before moving to the next branch.
- Backtrack when you reach a node with no unvisited neighbors.
- DFS can be implemented using a recursive approach or with a stack.

### Steps of DFS:
- Start at the root node or any arbitrary node.
- Mark the current node as visited.
- Visit an unvisited adjacent node (neighbor) and repeat the process recursively.
- If no unvisited adjacent nodes are left, backtrack to the previous node.
- Continue this process until all nodes have been visited.

### Applications of DFS:
- Pathfinding: In mazes or graphs, to find paths from one point to another.
- Cycle detection: In directed or undirected graphs.
- Topological sorting: In Directed Acyclic Graphs (DAGs).
- Component detection: In graph analysis, like finding connected components.

### Example (Recursive DFS):
```js
function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;
    visited.add(node);
    console.log(node);
    
    // Visit all neighbors
    for (let neighbor of graph[node]) {
        dfs(graph, neighbor, visited);
    }
}
```
### DFS vs BFS:
- DFS goes deep into a graph/tree and uses backtracking.
- BFS (Breadth First Search) explores all neighbors of a node before moving deeper into the tree/graph.
