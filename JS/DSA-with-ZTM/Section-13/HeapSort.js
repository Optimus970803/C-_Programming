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
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child
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

    // Recursively heapify the affected subtree
    heapify(arr, n, largest);
  }
}

// Example usage:
let array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // Output: [1, 3, 4, 5, 10]
