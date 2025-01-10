## Linear Search

>[!NOTE]
>Linear search is a straightforward searching algorithm used to find a specific element in a list. It works by checking each element of the list one by one until the desired element is found or the end of the list is reached.

### How Linear Search Works:
1. Start at the beginning of the list.
2. Compare the current element with the target element.
3. If the current element matches the target, return its index.
4. If the current element does not match, move to the next element.
5. Repeat steps 2-4 until the element is found or the end of the list is reached.
6. If the target element is not found, return an indication (like -1 or None) that the element is not present.

### Example:
```js
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Element found, return index
        }
    }
    return -1; // Element not found
}
```

### Characteristics
- Time Complexity: O(n), where n is the number of elements in the list. This is because in the worst case, every element must be checked.
- Space Complexity: O(1), as it requires a constant amount of extra space.

### When to Use:
- When the list is unsorted.
- When the list is small or performance is not a critical concern.
- When simplicity is desired over efficiency.





