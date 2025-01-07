# Insertion Sort
>[!NOTE]
>Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one item at a time. It's much like the way people often sort playing cards in their hands: one card at a time, by finding its correct position relative to the already sorted cards.

### How Insertion Sort Works:
- Start with the second element (since a single element is trivially sorted).
- Compare this element to the elements before it.
- Shift elements that are greater than the current element one position to the right.
- Insert the current element into its correct position.
- Repeat this process for all elements in the array.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240802210251/Insertion-sorting.png" />

### Characteristics:
Time Complexity:
- Best case:  O(n) (when the array is already sorted).
- Worst case:O(n^2) (when the array is sorted in reverse order).
- Space Complexity: O(1) (in-place sorting).
- Stable: Maintains the relative order of records with equal keys.


### Here's a simple implementation of the Insertion Sort algorithm in JavaScript:
```javascript
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        // Move elements of the sorted segment forward if they are greater than current
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }

        // Insert the current element into its correct position
        array[j + 1] = current;
    }

    return array;
}

// Example usage:
const arr = [5, 3, 4, 1, 2];
console.log(insertionSort(arr)); // Output: [1, 2, 3, 4, 5]
```
Explanation:
- Outer Loop (i): Starts from the second element (i = 1) and iterates through the array.
- Inner Loop (j): Compares the current element (array[i]) with the elements in the sorted portion (array[0] to array[i-1]), moving larger elements one position to the right.
- Insertion: Places the current element (current) in its correct position once the right spot is found.
