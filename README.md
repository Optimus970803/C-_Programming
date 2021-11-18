# DSA

![maxresdefault](https://user-images.githubusercontent.com/70604119/236719179-35e83396-2c89-43d3-9ab7-8390ceb49ece.jpg)

<h1>About...</h1>
<p>
DSA stands for "Data Structures and Algorithms." In computer science and programming, data structures refer to the way data is organized and stored in a computer's memory, while algorithms are a set of step-by-step instructions for solving a particular problem or task.

Data structures and algorithms are an essential part of computer science and programming. They help programmers create efficient and effective software by organizing data in ways that make it easy to manipulate and retrieve, and by providing efficient algorithms for performing common operations on that data.

For example, some common data structures include arrays, linked lists, trees, graphs, and hash tables. Algorithms can be used to search and sort data, traverse trees and graphs, and perform many other operations on data structures.

Knowing data structures and algorithms can help you write more efficient and effective code, and is an important skill for any programmer to have.</p>

# Overview

- Data Structure is a systematic way to organize data in order to use it efficiently.   Following terms are the foundation terms of a data structure.
  - [ ] Interface ->Each data structure has an interface. Interface    represents the set of operations that a data structure supports. An interface only provides the list of supported operations, type of parameters they can accept and return type of these operations.
  - [ ] Implementation −>Implementation provides the internal representation of a data structure. Implementation also provides the definition of the algorithms used in the operations of the data structure.

## Characteristics of a Data Structure

  - [ ] Correctness −> Data structure implementation should implement its interface correctly.
  - [ ] Time Complexity −> Running time or the execution time of operations of data structure must be as small as possible.
  - [ ] Space Complexity −> Memory usage of a data structure operation should be as little as possible.

## Need for Data Structure

- As applications are getting complex and data rich, there are three common problems that applications face now-a-days.

  - [ ] Data Search -> Consider an inventory of 1 million(106) items of a store. If the application is to search an item, it has to search an item in 1 million(106) items every time slowing down the search. As data grows, search will become slower.

  - [ ] Processor speed -> Processor speed although being very high, falls limited if the data grows to billion records.

  - [ ] Multiple requests -> As thousands of users can search data simultaneously on a web server, even the fast server fails while searching the data.

- To solve the above-mentioned problems, data structures come to rescue. Data can be organized in a data structure in such a way that all items may not be required to be searched, and the required data can be searched almost instantly.

## Execution Time Cases

- There are three cases which are usually used to compare various data structure's execution time in a relative manner.
  - [ ] Worst Case −> This is the scenario where a particular data structure operation takes maximum time it can take. If an operation's worst case time is ƒ(n) then this operation will not take more than ƒ(n) time where ƒ(n) represents function of n.

  - [ ] Average Case −> This is the scenario depicting the average execution time of an operation of a data structure. If an operation takes ƒ(n) time in execution, then m operations will take mƒ(n) time.

  - [ ] Best Case −> This is the scenario depicting the least possible execution time of an operation of a data structure. If an operation takes ƒ(n) time in execution, then the actual operation may take time as the random number which would be maximum as ƒ(n).

  