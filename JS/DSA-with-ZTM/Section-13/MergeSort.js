function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  //1. Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftHalf = mergeSort(arr.slice(0, mid));
  const rightHalf = mergeSort(arr.slice(mid));

  //2. Merge the Sorted Halves

  return merge(leftHalf, rightHalf);
}

function merge(left, right) {
  let sortedArra = [];
  let i = 0,
    j = 0;

  //Compare elements and merge
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArra.push(left[i]);
      i++;
    } else {
      sortedArra.push(right[j]);
      j++;
    }
  }

  // Add remaing elements form both halves
  return sortedArra.concat(left.slice(i).concat(right.slice(j)));
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
