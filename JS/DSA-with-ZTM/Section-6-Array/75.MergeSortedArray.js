// merge two sorted array mergeSortedArrays([0,3,4,31], [3,4,6,30]);

const mergeSortedArrays = (arr1, arr2) => {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
    newArray.push(arr2[i]);
  }
  return newArray;
};

// console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));

function mergeSortedArrays2(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;

  let j = 1;

  //check
  if (arr1.length === 0 || !arr2.length === 0)
    return arr1.length === 0 ? arr1 : arr2;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30]));
