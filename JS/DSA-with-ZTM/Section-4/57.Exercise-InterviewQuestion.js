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
const array2 = ["z", "y", "i"];
const array3 = new Array(10000).fill("nemo");
const array4 = new Array(10000).fill("darla");

// Solution 1
function containsCommonItem(arr1, arr2) {
  const start = performance.now();
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        const end = performance.now();
        console.log("performance:" + (end - start));
        return true;
      }
    }
  }
  const end = performance.now();
  console.log("performance:" + (end - start));
  return false;
} // time complexity: O(n^2), space complexity: O(1)

//console.log(containsCommonItem(array1, array2)); // O(n^2) because 2 array diffrent size difrrent input

// Solution 2
function containsCommonItem2(arr1, arr2) {
  // loop through frist array  and create object where property===items in the array
  //loop through second array and check if item in second array exists on created object

  let map = {};
  const start = performance.now();
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (map[arr2[i]]) {
      const end = performance.now();
      console.log("performance2:" + (end - start));
      return true;
    }
  }
  const end = performance.now();
  console.log("performance2:" + (end - start));
  return false;
} // space complexity: O(a)
// O(a+b)==>O(n)   --> Time Complexity is better than frist one

const containsCommonItem3 = (arr1, arr2) => {
  const start = performance.now();
  const result = arr1.some((item) => arr2.includes(item));
  const end = performance.now();
  console.log("performance3:" + (end - start));
  return result;
};

// containsCommonItem(array1, array2); // performance: 0.0045999999999999375  ---> In the small array perfomance is not be issue
// containsCommonItem2(array1, array2); //performance2: 0.012399999999999523  -->> Al long as input size get bigger you can see issues

containsCommonItem(array3, array4); // performance:317.7592  --> this function is more bad performance and so slow as you can see
containsCommonItem2(array3, array4); // performance2:0.7986000000000217 --> this function is more fast whenever input size will increase
containsCommonItem3(array3, array4); // performance3:82.22250000000003
