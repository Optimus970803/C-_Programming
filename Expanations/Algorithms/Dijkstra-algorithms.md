## Dijkstra algorithms
Dijkstra's algorithm is a popular algorithm used in computer science for finding the shortest path between nodes in a graph, which may represent, for example, road networks. It was conceived by Dutch computer scientist Edsger W. Dijkstra in 1956.

### Key Concepts of Dijkstra's Algorithm:
Graph Representation:
- The graph consists of nodes (vertices) and edges (connections between nodes).
- Each edge has a non-negative weight, representing the cost, distance, or time required to traverse it.

Purpose:
- The algorithm finds the shortest path from a source node to all other nodes in the graph, producing the shortest path tree.
- It is especially useful in scenarios like routing and network optimization.

### Algorithm Steps:
Initialization:
- Set the distance to the source node as 0 and to all other nodes as infinity.
- Mark all nodes as unvisited. Create a priority queue to store nodes and their current shortest distance.

Visit the Unvisited Node with the Smallest Distance:
- Begin with the source node, and visit the unvisited node with the smallest known distance.\

Update Neighboring Nodes:
- For the current node, consider all its unvisited neighbors and calculate their tentative distances.
- If the new calculated distance is smaller than the known distance, update the shortest distance.

Mark the Current Node as Visited:
- Once all the neighbors are checked, mark the current node as visited. A visited node will not be checked again.

Repeat Until All Nodes are Visited:
- Continue the process for the next unvisited node with the smallest distance.

### Result:
- The algorithm outputs the shortest path from the source node to every other node in the graph.
- If needed, the actual shortest path can be reconstructed from the distances and predecessors.

### Applications:
- Network routing protocols (e.g., OSPF, IS-IS).
- GPS navigation systems for finding the shortest route.
- Traffic engineering and urban planning.
- Solving puzzles like the shortest path in mazes.

