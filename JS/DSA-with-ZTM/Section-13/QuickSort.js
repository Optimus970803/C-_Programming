function quickSort(arr) {
  //Base case: array with 0 or 1 element are already sorted
  if (arr.length <= 1) return arr;

  // Choose a pivot element the element (here, the last element)
  const pivot = arr[arr.length - 1];

  //Array to hold elements less  than and greather than the pivot
  const left = [];
  const right = [];

  //partition the array into left and right sub array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  //Recursivly sort the left and rigth sub-arrays and combine with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(array)); // Output: [1, 1, 2, 3, 6, 8, 10]
