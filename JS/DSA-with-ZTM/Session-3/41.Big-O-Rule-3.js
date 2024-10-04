function compressBoxesTwise(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    // boxes is may be 1 or may be 100
    console.log(boxes);
  });

  boxes2.forEach(function (boxes2) {
    // boxes2 is may be 1 or may be 1000
    console.log(boxes2);
  });

  // all of them 2 input loop may run diffrently as boxes and boxes2
}

// O(a+b)
