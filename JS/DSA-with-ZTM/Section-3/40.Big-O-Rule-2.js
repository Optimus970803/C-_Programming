function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); //1

  var middleIndex = Math.floor(items.length / 2); // n/2
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    //100
    console.log("hi");
  }
}

// Rule 2 Drop the constants
// O(1+n/2+100)= O(n)
