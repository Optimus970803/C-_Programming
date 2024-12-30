# What is Graph ?

>[!TIP]
>In data structures, a graph is a collection of nodes (also called vertices) and edges that connect pairs of nodes. Graphs are used to represent relationships or connections between different entities. They are widely used in computer science to model various real-world problems like social networks, transportation networks, and dependency structures.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20200630111809/graph18.jpg" />

## Key Components:
- 1.Vertices (Nodes): The fundamental units of a graph that represent entities.
- 2.Edges (Links): Connections between pairs of vertices. Edges can be
  - Directed: Represented as arrows, showing a one-way relationship.
  - Undirected: No direction, representing a mutual relationship.
 
## Types of Graphs:
- 1.Directed Graph (Digraph): Edges have a direction (e.g., a → b).
- 2.Undirected Graph: Edges do not have a direction (e.g., a — b).
- 3.Weighted Graph: Edges have weights or costs associated with them (e.g., distance, time, cost).
- 4.Unweighted Graph: Edges do not have weights.

## Properties:
- 1.Degree:
  - For an undirected graph, the degree of a vertex is the number of edges connected to it.
  - For a directed graph:
    - In-degree: Number of incoming edges.
    - Out-degree: Number of outgoing edges.
- 2.Path: A sequence of vertices connected by edges.
- 3.Cycle: A path that starts and ends at the same vertex

## Representation:
- Adjacency Matrix: A 2D array where matrix[i][j] indicates if there's an edge between vertex i and j.
- Adjacency List: A list where each vertex has a list of adjacent vertices.
- Edge List: A list of all edges in the graph.

### Applications:
- Social Networks: Representing connections between people.
- Web Crawling: Representing links between web pages.
- Routing: Finding the shortest path in maps or networks.
- Dependency Analysis: Task scheduling or build systems.

### Example:
- Graph with vertices: {A, B, C, D}
- Edges: {(A, B), (B, C), (C, D), (A, D)}
  - This graph could represent a network of cities connected by roads.
