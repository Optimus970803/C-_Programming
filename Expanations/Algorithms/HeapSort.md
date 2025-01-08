# Heap Sort
>[!NOTE]
>Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It is an efficient, in-place sorting algorithm with a time complexity of O(nlogn) in the worst, average, and best cases. Here’s a step-by-step overview of how Heap Sort works:


### Steps of Heap Sort:
1. Build a Max Heap:
 - Convert the input array into a max heap, where each parent node is greater than or equal to its child nodes.
 - This step ensures that the largest element is at the root of the heap.

2. Extract Elements from the Heap:
 - Swap the root element (the largest) with the last element of the heap.
 - Reduce the size of the heap by one, effectively removing the largest element from consideration.
 - Restore the max heap property by "heapifying" the root element to ensure the largest element is at the root again.

3. Repeat the Process:
 - Continue the extraction and heapification process until all elements are sorted.

### Key Operations:
- Heapify: This operation ensures that a subtree satisfies the heap property, which may involve recursively moving down the tree.
- Building the Heap: This process involves calling the heapify function starting from the last non-leaf node up to the root, ensuring the entire array satisfies the heap property.

### Advantages:
- In-place Sorting: Heap Sort does not require additional storage space beyond the initial array.
- Predictable Performance: It consistently has a time complexity of O(nlogn).

### Disadvantages:
Not Stable: Heap Sort is not stable, meaning the relative order of equal elements may not be preserved.
Cache Performance: It may have poor cache performance due to its non-sequential memory access pattern.

### Example:
Given an array [4, 10, 3, 5, 1], Heap Sort would work as follows:
1.Build Max Heap: [10, 5, 3, 4, 1]
2. Swap and Heapify: [1, 5, 3, 4, 10] → Heapify → [5, 4, 3, 1, 10]
3. Repeat: [1, 4, 3, 5, 10] → Heapify → [4, 1, 3, 5, 10]
4. Repeat: [3, 1, 4, 5, 10] → Heapify → [3, 1, 4, 5, 10]
5. Final Sort: [1, 3, 4, 5, 10]

### Here's an implementation of Heap Sort in JavaScript:
```js
function heapSort(arr) {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Swap the current root (largest) with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;       // Initialize largest as root
    let left = 2 * i + 1;  // Left child
    let right = 2 * i + 2; // Right child

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

        // Recursively heapify
```
### Explanation:
Building the Max Heap:
- Start from the last non-leaf node and call heapify to build a max heap.
Heapify Function:
- Ensures the heap property for a node and its children.
- Recursively adjusts the affected subtree if the heap property is violated.
Sorting Process:
- Swap the root of the heap (the maximum element) with the last element.
- Reduce the heap size and call heapify to restore the max heap property.
- Repeat until the entire array is sorted.
