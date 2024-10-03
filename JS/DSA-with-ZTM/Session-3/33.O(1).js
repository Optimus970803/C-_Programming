const boxes = [0, 1, 2, 3, 4, 5];

function logFristTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFristTwoBoxes(boxes); // O(2) Contstant time no matter how large input the function have
