# Selection Sort

>[!NOTE]
>Selection Sort is a simple and intuitive sorting algorithm that divides the input list into two parts: a sorted portion and an unsorted portion. The algorithm repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted portion and moves it to the end of the sorted portion.

### Here’s a step-by-step explanation of how it works:

- Initialize: Start with the first element in the list as the minimum (or maximum, for descending order).
- Find Minimum/Maximum: Search the rest of the list to find the smallest (or largest) element.
- Swap: Swap the found smallest (or largest) element with the first element of the unsorted portion.
- Move Boundary: Move the boundary of the sorted portion one element to the right.
- Repeat: Repeat the process for the rest of the list until the entire list is sorted.

### Example of Selection Sort in Ascending Order:
- Initial list: [64, 25, 12, 22, 11]
- Step 1: Find the smallest element (11) and swap with the first element.
   - Result: [11, 25, 12, 22, 64]
- Step 2: Find the next smallest element (12) and swap with the second element.
  - Result: [11, 12, 25, 22, 64]
- Step 3: Find the next smallest element (22) and swap with the third element.
  - Result: [11, 12, 22, 25, 64]
- Step 4: Find the next smallest element (25) and swap with the fourth element.
  - Result: [11, 12, 22, 25, 64]
- Step 5: The list is now sorted.

### Characteristics:
- Time Complexity:
   - Best, Worst, and Average case:O(n^2) where n is the number of elements.
- Space Complexity:O(1) (in-place sorting).
- Stability: Selection Sort is generally not stable (it doesn't preserve the relative order of equal elements).
- Although Selection Sort is simple to understand and implement, it is inefficient on large lists compared to more advanced algorithms like QuickSort or MergeSort.

  ### Here are implementations of Selection Sort in both Python and JavaScript:
  - python
```py
  def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        # Assume the minimum is the first element
        min_index = i
        # Iterate through the unsorted part of the array
        for j in range(i+1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        # Swap the found minimum element with the first element
        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr

# Example usage:
arr = [64, 25, 12, 22, 11]
sorted_arr = selection_sort(arr)
print("Sorted array:", sorted_arr)
```
- JavaScript Implementation:
```js
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Assume the minimum is the first element
        let minIndex = i;
        // Iterate through the unsorted part of the array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

// Example usage:
let arr = [64, 25, 12, 22, 11];
let sortedArr = selectionSort(arr);
console.log("Sorted array:", sortedArr);
```
