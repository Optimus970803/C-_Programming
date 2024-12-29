# What is Trie?
>[!TIP]
>A Trie (pronounced "try"), also known as a prefix tree or digital tree, is a tree-like data structure used to efficiently store and retrieve keys in a dataset of strings. It is especially useful for searching, auto-completion, and dictionary implementations.

## Key Features of a Trie:
### 1.Hierarchical Representation:
- Each node represents a character of a string.
- The path from the root to a node spells out a prefix of the string.
### 2.Efficient Prefix Search:
- Searching for all words with a given prefix is quick and efficient because the prefix corresponds to a unique path in the tree.
### 3.Space Optimization:
- Shared prefixes among strings are stored only once, saving space compared to storing strings individually.
### 4.End Markers: 
- Special markers (or flags) at nodes indicate the end of a valid word.

### Example:
Consider the strings: "cat", "cap", and "car".
The Trie would look like this:
```markdown
        (root)
         /  \
        c    ...
         |
         a
        /|\
       t p r
       | | |
      (end) ...
```
- "cat", "cap", and "car" all share the prefix "ca", so that part is stored only once.
- (end) indicates the end of a word

## Operations on a Trie:
### 1.Insert:
- Add a string to the Trie by traversing and creating nodes for each character.
### 2.Search:
- To check if a string exists, traverse the Trie along the string's path.
- Verify if a node with the end marker is reached.
### 3.Prefix Matching:
- Find all words with a given prefix by traversing the Trie to the prefix's last character and exploring its subtree.

## Advantages:
- Fast search, insert, and prefix operations (O(M), where M is the length of the string).
- Efficient for autocomplete and spell-checking applications.

## Disadvantages:
- Can use a lot of memory if many nodes are sparsely populated.
