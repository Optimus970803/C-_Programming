# Common Non-Comparison Sorting Algorithms:
>[!NOTE]
>A Non-Comparison Sort is a type of sorting algorithm that does not rely on comparing elements to determine their order. Instead, it uses other properties of the elements to arrange them, often based on counting, hashing, or distributing elements into buckets.

### Counting Sort:
- Assumes the input consists of integers within a small range.
- Counts the occurrences of each element and uses this information to place elements directly into their sorted position.
- Time Complexity: O(n+k), where n is the number of elements and k is the range of the input values.0

### Radix Sort:
- Sorts integers by processing individual digits from the least significant to the most significant digit.
- Often uses Counting Sort as a subroutine to sort digits.
- Time Complexity: O(d×(n+k)), where d is the number of digits in the largest number, n is the number of elements, and k is the base (range of digits).

### Bucket Sort:
- Distributes elements into a number of buckets, sorts the buckets individually (usually using another sorting algorithm), and then concatenates the results.
- Time Complexity: O(n+k), where n is the number of elements and k is the number of buckets.

## Characteristics of Non-Comparison Sorts:
- They are efficient for specific types of input, especially when the range of input values is limited.
- They can achieve linear time complexity under certain conditions, outperforming comparison-based sorts like Quick Sort or Merge Sort, which have a lower bound of O(nlogn).
- They are generally not comparison-based and rely on counting, distributing, or handling elements based on their characteristics.
