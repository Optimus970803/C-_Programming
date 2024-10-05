// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

// Solution 1
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}

//console.log(containsCommonItem(array1, array2)); // O(n^2) because 2 array diffrent size difrrent input

// Solution 2
function containsCommonItem2(arr1, arr2) {
  // loop through frist array  and create object where property===items in the array
  //loop through second array and check if item in second array exists on created object
} // O(a+b)==>O(n)
