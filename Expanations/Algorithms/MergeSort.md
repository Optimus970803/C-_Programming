# Merge Sort
>[!NOTE]
>Merge Sort is a divide-and-conquer sorting algorithm that splits an array into smaller sub-arrays, sorts them individually, and then merges them back together in a sorted manner. Here's how it works step-by-step:

### Steps of Merge Sort:
- Divide: Recursively split the array into two halves until each sub-array contains a single element or no elements.
- Conquer: Sort the sub-arrays by merging them together in a sorted order.
- Combine: Continue merging sub-arrays to produce larger sorted sub-arrays until the whole array is merged back together in sorted order.

### Key Characteristics:
- Stable: Maintains the relative order of equal elements.
- Time Complexity:
- Best, Average, and Worst Case: O(nlogn), where n is the number of elements in the array.
- Space Complexity: O(n), due to the additional space needed for the temporary arrays used during merging.

### Here's a JavaScript implementation of Merge Sort:
```js
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const mid = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, mid));
    const rightHalf = mergeSort(array.slice(mid));

    // Merge the sorted halves
    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    // Compare elements and merge
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from both halves
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);  // Output: [3, 9, 10, 27, 38, 43, 82]
```
