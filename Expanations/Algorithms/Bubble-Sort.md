# Buble Sort 

>[!NOTE]
>Bubble Sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items, and swapping them if they are in the wrong order. This process is repeated until the list is sorted.
## How Bubble Sort Works:
- Compare Adjacent Elements: Start with the first two elements, compare them, and swap them if the first is greater than the second.
- Repeat for Each Pair: Move to the next pair and repeat the process for the entire list.
- Passes Through the List: After each full pass through the list, the next largest element is placed in its correct position at the end of the list.
- Continue Until Sorted: This process is repeated for the remaining unsorted portion of the list. With each pass, fewer comparisons are needed as the largest elements "bubble up" to their correct positions.


### Example:
Consider the list [5, 3, 8, 4, 2]:
Pass 1: Compare and swap if needed.
- Compare 5 and 3 → Swap → [3, 5, 8, 4, 2]
- Compare 5 and 8 → No swap
- Compare 8 and 4 → Swap → [3, 5, 4, 8, 2]
- Compare 8 and 2 → Swap → [3, 5, 4, 2, 8]
Pass 2: Repeat the process for the first four elements.
- Compare 3 and 5 → No swap
- Compare 5 and 4 → Swap → [3, 4, 5, 2, 8]
- Compare 5 and 2 → Swap → [3, 4, 2, 5, 8]
Pass 3: Continue until the list is sorted.

### Time Complexity:
- Best Case (Already Sorted List): O(n) with an optimized version that stops if no swaps are made.
- Average and Worst Case: O(n²), where n is the number of elements in the list.

### Characteristics:
- Stable: Maintains the relative order of equal elements.
- In-Place: Requires only a constant amount of extra memory

>[!TIP]
>Bubble Sort is often used for educational purposes to illustrate the concept of sorting algorithms. However, it's not efficient for large datasets compared to other sorting algorithms like Quick Sort or Merge Sort.
### Here are implementations of Bubble Sort in a few different programming languages:
- Javascript
```javascript
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce the range for comparison
    } while (swapped);
    return arr;
}

// Example usage
console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
```
- Python
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

# Example usage
print(bubble_sort([5, 3, 8, 4, 2]))  # Output: [2, 3, 4, 5, 8]
```
- C++
```c++
#include <iostream>
#include <vector>

void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    bool swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}

int main() {
    std::vector<int> arr = {5, 3, 8, 4, 2};
    bubbleSort(arr);
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl; // Output: 2 3 4 5 8
    return 0;
}
```
- javascript
```java
import java.util.Arrays;
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 4, 2};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr)); // Output: [2, 3, 4, 5, 8]
    }
}
```
