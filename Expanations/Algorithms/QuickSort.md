# Quick Sort

>[!NOTE]
>Quick Sort is an efficient, divide-and-conquer sorting algorithm that uses a pivot element to partition the array into two sub-arrays: one with elements less than the pivot and the other with elements greater than the pivot. Here's a step-by-step explanation of how Quick Sort works:

1. Choose a Pivot: Select a pivot element from the array. The choice of pivot can be the first element, last element, middle element, or chosen randomly.
2. Partitioning: Rearrange the array so that all elements less than the pivot come before it and all elements greater than the pivot come after it. This step is known as partitioning.
3. Recursive Sorting: Recursively apply the above steps to the sub-arrays of elements with smaller values and those with greater values.
4. Base Case: The recursion stops when the sub-array has one or no elements, which means it's already sorted.

### Example:
Given an array [3, 6, 8, 10, 1, 2, 1]:
1. Choose a pivot (e.g., 6).
2. Partition the array: [3, 1, 2, 1] (less than 6), 6, [8, 10] (greater than 6).
3. Recursively apply Quick Sort to [3, 1, 2, 1] and [8, 10].
4. Continue until the entire array is sorted.

### Advantages:
- Efficient: Average time complexity is O(nlogn).
- In-Place: Uses constant extra space (excluding the recursion stack).

### Disadvantages:
- Worst-case time complexity: O(n^ 2 ) occurs when the pivot selections are poor (e.g., always the smallest or largest element).
- Not Stable: Does not preserve the relative order of equal elements.

### Here's a JavaScript implementation of the Quick Sort algorithm:
```javascript
function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element (here, the last element)
  const pivot = arr[arr.length - 1];

  // Arrays to hold the elements less than and greater than the pivot
  const left = [];
  const right = [];

  // Partition the array into left and right sub-arrays
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right sub-arrays, and combine with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(array)); // Output: [1, 1, 2, 3, 6, 8, 10]
```

Explanation:
1. Base Case: If the array length is 0 or 1, it is already sorted, so return it.
2. Pivot Selection: The pivot is chosen as the last element of the array.
3. Partitioning:
   - Elements less than the pivot are pushed into the left array.
   - Elements greater than or equal to the pivot are pushed into the right array.
4. Recursive Sorting: Recursively apply quickSort to the left and right arrays.
5. Combine: Return the concatenated result of the sorted left array, the pivot, and the sorted right array.
