# Weighted Graph

>[!TIP]
>In a weighted graph, each edge has an associated numerical value (weight), which typically represents:
> - Cost: E.g., the price of traveling along a road.
> - Distance: E.g., the length of a road between two cities.
> - ime: E.g., time taken to travel between locations.

<img src="https://pbs.twimg.com/media/FlNGUMLWQAAoD55?format=jpg&name=small" />

### Example:
Vertices: A,B,C
Edges with weights:
- (A->B,5)-weight 5
- (B->C,3)-weight 3
- (C->A,7)-weight 7

This graph is often represented as:
- 1.Adjacency Matrix with weights:
```markdown
[ 0  5  7 ]
[ ∞  0  3 ]
[ 7  ∞  0 ]
```
Here, ∞ means no direct edge between those vertices.

- 2.Adjacency List with weights:
```markdown
A -> [(B, 5), (C, 7)]
B -> [(C, 3)]
C -> [(A, 7)]
```
Weighted graphs are widely used in applications like shortest-path algorithms (Dijkstra's Algorithm, Bellman-Ford).
