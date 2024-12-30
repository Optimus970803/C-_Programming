What is Unweighted Graph?

>[!TIP]
>In an unweighted graph, all edges are treated equally, meaning there are no weights or costs assigned. It only represents connections or relationships.

<img src="https://pbs.twimg.com/media/FlNGUMLWQAAoD55?format=jpg&name=large" />

### Examples
Vertices: A,B,C
Edges: 
- A->B,
- B->C,
- C->A

This can also be represented as:
- Adjacency Matrix:
```css
[ 0  1  1 ]
[ 0  0  1 ]
[ 1  0  0 ]
```
Here, 1 indicates a connection

- Adjacency List:
```css
A -> [B, C]
B -> [C]
C -> [A]
```
Unweighted graphs are simpler and are used when edge weights are not relevant (e.g., representing friendships in a social network).
